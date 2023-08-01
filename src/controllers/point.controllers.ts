import { Request, Response } from 'express';
import * as services from '../services/point.services';
import { HttpResponse } from '../utils/http.response';
const httpResponse = new HttpResponse();

export const getAll = async (req: Request, res: Response) => {
    try {
        const points = await services.getAll();
        return httpResponse.Ok(res, points); 
    } catch (error) {
        return httpResponse.ServerError(res, error);
    }
};