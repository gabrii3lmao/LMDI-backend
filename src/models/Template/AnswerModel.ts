import { Schema } from "mongoose";

export const AnswerSchema = new Schema(
  {
    questionNumber: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
      enum: ["A", "B", "C", "D", "E"],
    },
  },
  { _id: false }
);
