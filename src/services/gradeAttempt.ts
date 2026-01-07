type Answer = {
  questionNumber: number;
  value: string;
};

type GradeResult = {
  score: number;
  results: Record<number, boolean>;
};

export function gradeAttempt(
  official: Answer[],
  attempt: Answer[]
): GradeResult {
  let score = 0;
  const results: Record<number, boolean> = {};

  const attemptMap = new Map<number, string>();
  for (const answer of attempt) {
    attemptMap.set(answer.questionNumber, answer.value);
  }

  for (const correct of official) {
    const userAnswer = attemptMap.get(correct.questionNumber);
    const isCorrect = userAnswer === correct.value;

    results[correct.questionNumber] = isCorrect;
    if (isCorrect) score++;
  }

  return {
    score,
    results,
  };
}

export default gradeAttempt;
