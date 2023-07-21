import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import { HttpResponse } from '../../utils/http.response';
const httpResponse = new HttpResponse();

export const validateRegister = [
    check('email', 'Insert email valid') 
        .exists()
        .not()  
        .isEmpty()
        .isEmail(),
    check('password', 'Insert password valid (min 8 characters)')
        .exists()
        .not()  
        .isEmpty()
        .isLength({min: 8}),
    (req: Request, res: Response, next: NextFunction) => {
        try {
            validationResult(req).throw()
            return next()
        } catch (error) {
            httpResponse.Unauthorized(res, error)
        }
    }
];
