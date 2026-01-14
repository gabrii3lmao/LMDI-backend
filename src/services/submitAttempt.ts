import { AnswerKey } from "../models/Template/AnswerKeyModel.js";
import { Attempt } from "../models/Template/AttemptModel.js";
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
    throw new Error("Oficial Template now found");
  }

  const result = gradeAttempt(answerKey.answers, answers);

  const attempt = await Attempt.create({
    participantName,
    answerKey: answerKey._id,
    answers,
    score: result.score,
  });

  return {
    attemptId: attempt._id,
    score: result.score,
    total: answerKey.totalQuestions,
    results: result.results,
  };
}
