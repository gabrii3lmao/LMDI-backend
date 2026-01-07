import express from "express";
import type { Request, Response } from "express";

const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Testando rapidao alo alo");
});

export default routes;
