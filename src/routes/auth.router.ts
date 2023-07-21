import { Router } from 'express';
const router = Router();
import * as controllers from '../controllers/auth.controllers';
import { validateToken } from '../middlewares/token.validate';
import { validateRegister } from '../middlewares/validators/auth.validator';

router.post('/register', validateRegister, controllers.register);
router.post('/login', controllers.login);

export default router;