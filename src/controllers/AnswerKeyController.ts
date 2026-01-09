import type { Request, Response, NextFunction } from "express";
import { AnswerKey } from "../models/AnswerKeyModel.js";

export class AnswerKeyController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { tittle, totalQuestions, answers } = req.body;

      const answerKey = await AnswerKey.create({
        tittle,
        totalQuestions,
        answers,
      });

      return res.status(201).json(answerKey);
    } catch (error) {
      next(error);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const answerKeys = await AnswerKey.find();
      return res.status(200).json(answerKeys);
    } catch (error) {
      next(error);
    }
  }

  static async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const answerKey = await AnswerKey.findById(id);

      if (!answerKey) {
        return res.status(404).json({
          message: "AnswerKey not found",
        });
      }

      return res.status(200).json(answerKey);
    } catch (error) {
      next(error);
    }
  }
}
