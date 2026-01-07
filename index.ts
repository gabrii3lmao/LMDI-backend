import express from "express";
import routes from "./src/routes/router.js";
import mongoose from "mongoose";
import "dotenv/config";
import helmet from "helmet";
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use("/api", routes);

async function startServer() {
  try {
    const MONGO_URI: string = process.env.MONGO_URI!;
    await mongoose.connect(MONGO_URI);
    console.log("Servidor conectado ao banco de dados");

    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Error tentando conectar ao MongoDb: ${error}`);
    process.exit(1);
  }
}
startServer();
