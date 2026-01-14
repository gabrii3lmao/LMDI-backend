import type { Request, Response, NextFunction } from "express";
import { Attempt } from "../models/Template/AttemptModel.js";
import { submitAttempt } from "../services/submitAttempt.js";
import mongoose from "mongoose";

export class AttemptController {
  static async submit(req: Request, res: Response, next: NextFunction) {
    try {
      const { answerKeyId }: any = req.params;
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

  static async listByKey(req: Request, res: Response, next: NextFunction) {
    try {
      const { answerKeyId } = req.params;

      if (!answerKeyId) {
        return res.status(400).json({ message: "answerKey id is required" });
      }

      const attempts = await Attempt.find({
        answerKey: new mongoose.Types.ObjectId(answerKeyId),
      }).sort({ score: -1 });

      return res.status(200).json(attempts);
    } catch (error) {
      next(error);
    }
  }
}
