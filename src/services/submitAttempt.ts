import { AnswerKey } from "../models/TemplateModel.js";
import { Attempt } from "../models/AttemptModel.js";
import { gradeAttempt } from "./gradeAttempt.js";

type Answer = {
  questionNumber: number;
  value: string;
};

export async function submitAttempt(
  answerKeyId: string,
  participantName: string,
  answers: Answer[]
) {
  const answerKey = await AnswerKey.findById(answerKeyId);

  if (!answerKey) {
    throw new Error("Gabarito oficial não encontrado");
  }

  const result = gradeAttempt(answerKey.answers, answers);

  const attempt = await Attempt.create({
    participantName,
    answerKey: answerKey._id,
    answers,
    score: result.score,
  });

  return {
    score: result.score,
    total: answerKey.totalQuestions,
    results: result.results,
  };
}
