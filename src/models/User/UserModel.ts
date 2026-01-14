import { Schema, model } from "mongoose";
import { Document } from "mongoose";

interface UserAttrs {
  name: {
    first: string;
    last: string;
  };
  email: string;
  passwordHash: string;
  role: "admin" | "professor" | "student";
}

interface UserDocument extends UserAttrs, Document {
  fullName: string;
  isAdmin(): boolean;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "professor", "student"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual("fullName").get(function (this: UserDocument) {
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.methods.isAdmin = function (this: UserDocument) {
  return this.role === "admin";
};

export const User = model("User", UserSchema);
