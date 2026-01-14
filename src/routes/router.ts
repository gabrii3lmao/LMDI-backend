import { Router } from "express";
import { AnswerKeyController } from "../controllers/AnswerKeyController.js";
import { AttemptController } from "../controllers/AttemptController.js";

const router = Router();

/*
AnswerKeys (gabaritos oficiais) -> listar, criar, mostrar uma especifica
*/
router.get("/answer-keys", AnswerKeyController.list);
router.post("/answer-keys", AnswerKeyController.create);
router.get("/answer-keys/:id", AnswerKeyController.show);

/*
Attempts (tentativas)
*/
router.post("/answer-keys/:answerKeyId/attempts", AttemptController.submit);
router.get("/attempts/:id", AttemptController.show);
router.get("/answer-keys/:answerKeyId/attempts", AttemptController.listByKey);
export default router;
