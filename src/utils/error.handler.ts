import { Response } from 'express';

export const handlerHttp = (res: Response, error: string) => {
    res.status(500).send({ error });
};

