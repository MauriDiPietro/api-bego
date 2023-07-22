import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import { HttpResponse } from '../../utils/http.response';
const httpResponse = new HttpResponse();

export const orderValidator = [
    check('type', 'Insert type valid (string)') 
        .exists()
        .not()  
        .isEmpty()
        .isString(),
    check('description', 'Insert description valid (string)')
        .exists()
        .not()  
        .isEmpty()
        .isString(),
    check('route', 'Insert route valid (string)')
        .exists()
        .not()  
        .isEmpty()
        .isString(),
    check('status', 'Insert status valid (string)')
        .exists()
        .not()  
        .isEmpty()
        .isString()
        .custom((value) => {
            const validStatusValues = ['planning', 'in progress', 'complete'];
            if (!validStatusValues.includes(value)) {
                throw new Error('Invalid status value. Insert status valid (planning, in progress, complete)');
            }
            return true;
        }),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            httpResponse.Unauthorized(res, error)
        }
    }
];
