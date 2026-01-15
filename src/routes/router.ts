import { Router } from "express";
import { AnswerKeyController } from "../controllers/AnswerKeyController.js";
import { AttemptController } from "../controllers/AttemptController.js";
import { verifyCsrfToken } from "../middlewares/csrf.js";

const router = Router();

/*
CSRF token (leitura apenas)
*/
router.get("/csrf-token", (req, res) => {
  res.json({
    csrfToken: req.session.csrfToken,
  });
});

/*
AnswerKeys (gabaritos oficiais)
*/
router.get("/answer-keys", AnswerKeyController.list);
router.get("/answer-keys/:id", AnswerKeyController.show);
router.post("/answer-keys", verifyCsrfToken, AnswerKeyController.create);

/*
Attempts (tentativas)
*/
router.post(
  "/answer-keys/:answerKeyId/attempts",
  verifyCsrfToken,
  AttemptController.submit
);

router.get("/attempts/:id", AttemptController.show);
router.get("/answer-keys/:answerKeyId/attempts", AttemptController.listByKey);

export default router;
