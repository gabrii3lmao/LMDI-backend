import type { Request, Response, NextFunction } from "express";
import { Attempt } from "../models/AttemptModel.js";
import { submitAttempt } from "../services/submitAttempt.js";

export class AttemptController {
  static async submit(req: Request, res: Response, next: NextFunction) {
    try {
      const { answerKeyId }:any = req.params;
      const { participantName, answers } = req.body;

      const result = await submitAttempt(answerKeyId, participantName, answers);

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async show(req: Request, res: Response, next: NextFunction) {
    try {
      const attempt = await Attempt.findById(req.params.id);
      if (!attempt) {
        return res.status(404).json({ message: "Attempt not found" });
      }

      return res.json(attempt);
    } catch (error) {
      next(error);
    }
  }
}
