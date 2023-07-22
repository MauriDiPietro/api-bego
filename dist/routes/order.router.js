"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers = __importStar(require("../controllers/order.controllers"));
const order_validator_1 = require("../middlewares/validators/order.validator");
const token_validate_1 = require("../middlewares/token.validate");
const router = (0, express_1.Router)();
router.post('/', order_validator_1.orderValidator, token_validate_1.validateToken, controllers.create);
router.post('/add-truck/:truckId/:orderId', token_validate_1.validateToken, controllers.addTruckToOrder);
router.get('/', token_validate_1.validateToken, controllers.getAll);
router.get('/:id', token_validate_1.validateToken, controllers.getById);
router.put('/status/:id', token_validate_1.validateToken, controllers.updateStatus);
router.delete('/:id', token_validate_1.validateToken, controllers.remove);
router.put('/:id', token_validate_1.validateToken, order_validator_1.orderValidator, controllers.update);
exports.default = router;
