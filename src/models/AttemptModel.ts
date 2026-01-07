import { Schema, Types, model } from "mongoose";
import { AnswerSchema } from "./AnswerModel.js";

const AttemptSchema = new Schema(
  {
    participantName: {
      type: String,
      required: true,
      trim: true,
    },
    answerKey: {
      type: Types.ObjectId,
      ref: "AnswerKey",
      required: true,
    },
    answers: {
      type: [AnswerSchema],
      required: true
    },
    score: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

export const Attempt = model("Attempt", AttemptSchema);
