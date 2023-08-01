import { Request, Response } from 'express';
import * as services from '../services/truck.services'
import { HttpResponse } from '../utils/http.response';
const httpResponse = new HttpResponse();

export const getAll = async (req: Request, res: Response) => {
    try {
        const trucks = await services.getAll();
        return httpResponse.Ok(res, trucks); 
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};