import { Auth } from "../interfaces/auth.interface";
import { UserModel } from "../models/user.model";
import { createHash, isValidPassword } from "../utils/bcrypt.handler";

export const register = async ({ email, password }: Auth): Promise<boolean | Auth | undefined | null> => {
  try {
    const existUser = await UserModel.findOne({ email });
    if(existUser === null){
        const passHash = await createHash(password);
        const newUser = await UserModel.create({ email, password: passHash });
        return newUser;
    } 
    else return false;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const login = async ({ email, password }: Auth): Promise<boolean | Auth | undefined | null> => {
  try {
    const existUser = await UserModel.findOne({ email });
    if(existUser !== null){
        const passValid = await isValidPassword(existUser, password);
        if(!passValid) return null
        else return existUser
    } else return null;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
