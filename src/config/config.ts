import 'dotenv/config';

export default {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_KEY: process.env.JWT_KEY || 'token',
    API_KEY_GOOGLE: process.env.API_KEY_GOOGLE
};