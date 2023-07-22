import { Router } from 'express';
import * as controllers from '../controllers/order.controllers';
import { orderValidator } from '../middlewares/validators/order.validator';
import { validateToken } from '../middlewares/token.validate';
const router = Router();

router.post('/', orderValidator, validateToken, controllers.create);
router.post('/add-truck/:truckId/:orderId', validateToken, controllers.addTruckToOrder);
router.get('/', validateToken, controllers.getAll);
router.get('/:id', validateToken, controllers.getById);
router.put('/status/:id', validateToken, controllers.updateStatus);
router.delete('/:id', validateToken, controllers.remove);
router.put('/:id', validateToken, orderValidator, controllers.update);

export default router;