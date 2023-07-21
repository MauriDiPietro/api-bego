import { Router } from 'express';
const router = Router();
import * as controllers from '../controllers/auth.controllers';

router.
        post('/register', controllers.register);

export default router;