import { Router } from 'express';
const router = Router();
import * as controllers from '../controllers/route.controllers'; 
import { validateToken } from '../middlewares/token.validate';
import { routeValidator } from '../middlewares/validators/route.validator';

router.post('/:idPointA/:idPointB', validateToken, controllers.create);
router.get('/:placeIdPointA/:placeIdPointB',validateToken, controllers.getCoordinates);
router.get('/distance/:placeIdPointA/:placeIdPointB', validateToken, controllers.getDistance);
router.get('/', validateToken, controllers.getAll);
router.get('/:id', validateToken, controllers.getById);
router.put('/:id', routeValidator, validateToken, controllers.update);
router.delete('/:id', validateToken, controllers.remove);

export default router;