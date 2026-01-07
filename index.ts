import express from "express";
import routes from "./routes/router.js";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

async function startServer() {
  try {
    await mongoose.connect("mongodb://localhost:27017/lmdi");
    console.log("Servidor conectado ao banco de dados");

    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}/api`);
    });
  } catch (error) {
    console.log(`Error tentando conectar ao MongoDb: ${error}`);
    process.exit(1);
  }
}
startServer();
