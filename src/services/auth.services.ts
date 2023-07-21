import { Auth } from "../interfaces/auth.interface";
import { UserModel } from "../models/user.model";
import { createHash } from "../utils/bcrypt.handler";

export const register = async ({ email, password }: Auth) => {
  try {
    const existUser = await UserModel.findOne({ email });
    if(existUser) return false;
    const passHash = await createHash(password);
    const newUser = await UserModel.create({ email, password: passHash });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user: Auth) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
