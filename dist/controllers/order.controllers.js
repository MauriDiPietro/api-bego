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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTruckToOrder = exports.getAll = exports.getById = exports.remove = exports.update = exports.updateStatus = exports.create = void 0;
const services = __importStar(require("../services/order.services"));
const http_response_1 = require("../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, description, route, status, truck } = req.body;
        const order = { type, description, route, status, truck };
        const newOrder = yield services.create(order);
        return httpResponse.Ok(res, newOrder);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.create = create;
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updOrder = yield services.updateStatus(id, status);
        return httpResponse.Ok(res, updOrder);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.updateStatus = updateStatus;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updOrder = yield services.update(id, req.body);
        if (updOrder)
            return httpResponse.Ok(res, updOrder);
        else
            return httpResponse.NotFound(res, 'Error updating order');
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const delOrder = yield services.remove(id);
        if (delOrder)
            return httpResponse.Ok(res, delOrder);
        else
            return httpResponse.NotFound(res, 'Error removing order');
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.remove = remove;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield services.getById(id);
        return httpResponse.Ok(res, order);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.getById = getById;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield services.getAll();
        return httpResponse.Ok(res, orders);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.getAll = getAll;
const addTruckToOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { truckId } = req.params;
        const { orderId } = req.params;
        const order = yield services.addTruckToOrder(truckId, orderId);
        if (!order)
            return httpResponse.NotFound(res, 'Error add truck to order');
        else
            return httpResponse.Ok(res, order);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.addTruckToOrder = addTruckToOrder;
