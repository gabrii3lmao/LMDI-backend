import { Schema, Types, model } from "mongoose";
import { AnswerSchema } from "./AnswerModel.js";

const AnswerKeySchema = new Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
      min: 1,
    },
    answers: {
      type: [AnswerSchema],
      validate: {
        validator: function (answers: any[]) {
          return answers.length === this.totalQuestions;
        },
        message:
          "The number of responses does not match the total number of questions.",
      },
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export const AnswerKey = model("AnswerKey", AnswerKeySchema);
