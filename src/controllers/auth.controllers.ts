import { Request, Response } from "express";
import * as services from "../services/auth.services";
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();
import { generateToken } from "../utils/token.generate";

export const register = async(req: Request, res: Response) => {
    try {
        const newUser = await services.register(req.body);
        if(!newUser) return httpResponse.Unauthorized(res, 'User registered in database');
        else return httpResponse.Ok(res, newUser);
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};

export const login = async(req: Request, res: Response)=>{
    try {
       const user = await services.login(req.body);
       if(!user) return httpResponse.Unauthorized(res, 'Invalid credentials');
       if(user !== null){
           const access_token = generateToken(user);
           res.header('Authorization', access_token);
           return httpResponse.Ok(res, access_token);
       }
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
}