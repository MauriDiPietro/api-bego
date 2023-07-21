import express from 'express';
import morgan from 'morgan';
import config from './config/config';
import apiRouter from './routes/index'; 
import { dbConnection } from './config/db.connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', apiRouter);

const PORT = config.PORT || 8080;

dbConnection().then(() => console.log('Connect to MongoDB'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));