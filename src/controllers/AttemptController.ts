import type { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { Attempt } from "../models/Template/AttemptModel.js";
import { AnswerKey } from "../models/Template/AnswerKeyModel.js";
import { submitAttempt } from "../services/submitAttempt.js";

export class AttemptController {
  static async submit(req: Request, res: Response, next: NextFunction) {
    try {
      const { answerKeyId } = req.params;
      const { participantName, answers } = req.body;

      const userId = req.session.userId!;

      const result = await submitAttempt(
        answerKeyId!,
        participantName,
        answers,
        userId
      );

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async show(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session.userId!;
      const { id } = req.params;

      const attempt = await Attempt.findById(id).populate("answerKey");

      if (!attempt) {
        return res.status(404).json({ message: "Attempt not found" });
      }

      const isAttemptOwner =
        attempt.owner.toString() === userId;

      const isAnswerKeyOwner =
        (attempt.answerKey as any).owner.toString() === userId;

      if (!isAttemptOwner && !isAnswerKeyOwner) {
        return res.status(403).json({ message: "Access denied" });
      }

      return res.status(200).json(attempt);
    } catch (error) {
      next(error);
    }
  }

  static async listByKey(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.session.userId!;
      const { answerKeyId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(answerKeyId!)) {
        return res.status(400).json({ message: "Invalid answerKey id" });
      }

      const answerKey = await AnswerKey.findOne({
        _id: answerKeyId,
        owner: userId,
      });

      if (!answerKey) {
        return res.status(403).json({ message: "Access denied" });
      }

      const attempts = await Attempt.find({
        answerKey: answerKeyId!,
      }).sort({ score: -1 });

      return res.status(200).json(attempts);
    } catch (error) {
      next(error);
    }
  }
}
