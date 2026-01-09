import { Router } from "express";
import type { Request, Response } from "express";
import { AnswerKeyController } from "../controllers/AnswerKeyController.js";
import { AttemptController } from "../controllers/AttemptController.js";

const router = Router();

/*
AnswerKeys (gabaritos oficiais)
*/
router.get("/answer-keys", AnswerKeyController.list);
router.post("/answer-keys", AnswerKeyController.create);
router.get("/answer-keys/:id", AnswerKeyController.show);

/*
Attempts (tentativas)
*/
router.post("/answer-keys/:answerKeyId/attempts", AttemptController.submit);
router.get("/attempts/:id", AttemptController.show);

export default router;
