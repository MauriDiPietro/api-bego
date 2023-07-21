import { Router } from 'express';
const router = Router();
import * as controllers from '../controllers/auth.controllers';
import { userValidator } from '../middlewares/validators/auth.validator';

router.post('/register', userValidator, controllers.register);
router.post('/login', userValidator, controllers.login);

export default router;