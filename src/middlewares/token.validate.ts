import jwt from 'jsonwebtoken';
import config from '../config/config';
import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from "../utils/http.response";
import { UserModel } from '../models/user.model';
const httpResponse = new HttpResponse();

const JWT_KEY = config.JWT_KEY;

export const validateToken = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
    const authHeader = req.get('Authorization');
    if (!authHeader) return httpResponse.Unauthorized(res, 'Unauthorized');
      const token = authHeader.split(' ')[1];
      const decode: any = jwt.verify(
        token,
        JWT_KEY
      );
      console.log(decode);
      const user = await UserModel.findById(decode._id);
      if (!user) return httpResponse.Unauthorized(res, 'Unauthorized');
      req.user = user;
      next();
    } catch (error) {
      return httpResponse.ServerError(res, error);
    }
  };