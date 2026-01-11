// backend/index.ts
import express from "express";
import routes from "./routes/router.js";
import mongoose from "mongoose";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://lmdi-frontend.vercel.app"],
    credentials: true,
  })
);


app.use("/api", routes);

async function startServer() {
  try {
    const MONGO_URI: string =
      process.env.MONGO_URI!;
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
