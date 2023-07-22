import jwt from 'jsonwebtoken';
import config from '../config/config';
import { User } from '../interfaces/user.interface';

export const generateToken = (user: User | any) => {
    const JWT_KEY = config.JWT_KEY;

    const payload = {
        _id: user._id,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_KEY, {
        // expiresIn: '20m'
    });

    return token;
}
