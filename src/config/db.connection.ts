import config from './config';
import { connect } from 'mongoose';

export const dbConnection = async(): Promise<void> => {
    const MONGO_URI = <string>config.MONGO_URI;
    await connect(MONGO_URI);
};

