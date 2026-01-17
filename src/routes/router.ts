import { Router } from "express";
import { AnswerKeyController } from "../controllers/AnswerKeyController.js";
import { AttemptController } from "../controllers/AttemptController.js";
import { AuthController } from "../controllers/AuthController.js";
import { verifyCsrfToken } from "../middlewares/csrf.js";
import { isAuthenticated } from "../middlewares/auth.js";

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
Auth
(rotas públicas, exceto logout)
*/
router.post("/register", verifyCsrfToken, AuthController.register);
router.post("/login", verifyCsrfToken, AuthController.login);
router.post("/logout", isAuthenticated, AuthController.logout);

/*
AnswerKeys (gabaritos oficiais)
*/
router.get("/answer-keys", AnswerKeyController.list);
router.get("/answer-keys/:id", AnswerKeyController.show);

router.post(
  "/answer-keys",
  verifyCsrfToken,
  isAuthenticated,
  AnswerKeyController.create,
);

/*
Attempts (tentativas)
*/
router.post(
  "/answer-keys/:answerKeyId/attempts",
  verifyCsrfToken,
  isAuthenticated,
  AttemptController.submit,
);

router.get("/attempts/:id", isAuthenticated, AttemptController.show);

router.get(
  "/answer-keys/:answerKeyId/attempts",
  isAuthenticated,
  AttemptController.listByKey,
);

export default router;
