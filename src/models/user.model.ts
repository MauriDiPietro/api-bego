import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const UserModel = model('users', userSchema);
