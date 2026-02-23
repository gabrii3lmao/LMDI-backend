// backend/index.ts
import express from "express";
import routes from "./routes/router.js";
import mongoose from "mongoose";
import "dotenv/config";
import helmet from "helmet";
import session from "express-session";
import cors from "cors";
import { ensureCsrfToken } from "./middlewares/csrf.js";
import MongoStore from "connect-mongo";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://lmdiif.vercel.app/"],
    credentials: true,
  })
);

let isProduction = process.env.NODE_ENV === "production";
app.use(
  session({
    name: "sid",
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI!,
    }),
    cookie: {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api", ensureCsrfToken, routes);

async function startServer() {
  try {
    const MONGO_URI: string = process.env.MONGO_URI!;
    await mongoose.connect(MONGO_URI);
    console.log("Connected to the Database");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`There was an error trying to connect to mongo: ${error}`);
    process.exit(1);
  }
}

startServer();
