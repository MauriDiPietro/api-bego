import express from 'express';
import config from './config/config';
import apiRouter from './routes/index'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

const PORT = config.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});