import { Router } from 'express';
const router = Router();

import authRouter from './auth.router';
import orderRouter from './order.router';
import truckRouter from './truck.router';
import routeRouter from './route.router';
import pointRouter from './point.router';

router.use('/auth', authRouter);
router.use('/order', orderRouter);
router.use('/truck', truckRouter);
router.use('/route', routeRouter);
router.use('/point', pointRouter);

export default router;