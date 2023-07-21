import { Request, Response } from "express";
import * as services from "../services/auth.services";
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();

export const register = async(req: Request, res: Response) => {
    try {
        const newUser = await services.register(req.body);
        if(!newUser) return httpResponse.Unauthorized(res, 'Email registered in database');
        else return httpResponse.Ok(res, newUser);
    } catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
}