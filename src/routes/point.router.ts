import { Router } from 'express';
const router = Router();
import * as controllers from '../controllers/point.controllers';
import { validateToken } from '../middlewares/token.validate';

router.get('/', validateToken, controllers.getAll);

export default router;