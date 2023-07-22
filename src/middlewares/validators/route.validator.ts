import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import { HttpResponse } from '../../utils/http.response';
const httpResponse = new HttpResponse();

export const routeValidator = [
    check('route') 
        .exists()
        .not()  
        .isEmpty()
        .isString(),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            httpResponse.Unauthorized(res, error)
        }
    }
];
