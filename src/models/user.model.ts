import { Schema, model } from "mongoose";
import { Auth } from "../interfaces/auth.interface";

const userSchema = new Schema<Auth>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = model("users", userSchema);
