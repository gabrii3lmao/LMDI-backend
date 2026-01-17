import type { Request, Response, NextFunction } from "express";
import { AnswerKey } from "../models/Template/AnswerKeyModel.js";

export class AnswerKeyController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { tittle, totalQuestions, answers } = req.body;
      const user = req.session.userId!;

      const answerKey = await AnswerKey.create({
        tittle,
        totalQuestions,
        answers,
        owner: user,
      });

      return res.status(201).json(answerKey);
    } catch (error) {
      next(error);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.session.userId!;

      const answerKeys = await AnswerKey.find({ owner: user });
      return res.status(200).json(answerKeys);
    } catch (error) {
      next(error);
    }
  }

  static async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = req.session.userId!;

      const answerKey = await AnswerKey.findOne({
        _id: id,
        owner: user,
      });

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
