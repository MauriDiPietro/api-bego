"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_router_1 = __importDefault(require("./auth.router"));
const order_router_1 = __importDefault(require("./order.router"));
const truck_router_1 = __importDefault(require("./truck.router"));
const route_router_1 = __importDefault(require("./route.router"));
const point_router_1 = __importDefault(require("./point.router"));
router.use('/auth', auth_router_1.default);
router.use('/order', order_router_1.default);
router.use('/truck', truck_router_1.default);
router.use('/route', route_router_1.default);
router.use('/point', point_router_1.default);
exports.default = router;
