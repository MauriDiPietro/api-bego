"use strict";
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
const order_model_1 = require("../models/order.model");
const route_model_1 = require("../models/route.model");
const truck_services_1 = require("./truck.services");
const create = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const route = yield route_model_1.RouteModel.findById(order.route);
        if (route !== null) {
            const newOrder = yield order_model_1.OrderModel.create(order);
            return newOrder;
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.create = create;
const updateStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_model_1.OrderModel.findByIdAndUpdate(id, { status: status }, { new: true });
        return order;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateStatus = updateStatus;
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderExist = yield order_model_1.OrderModel.findById(id);
        if (orderExist && orderExist.status !== 'in progress') {
            const orderUpdate = yield order_model_1.OrderModel.updateOne(body);
            return orderUpdate;
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderExist = yield (0, exports.getById)(id);
        if (orderExist && orderExist.status !== 'in progress') {
            const orderRemove = yield order_model_1.OrderModel.deleteOne({ _id: id });
            return orderRemove;
        }
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.remove = remove;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_model_1.OrderModel.findById(id).populate(['truck', 'route']);
        return order;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_model_1.OrderModel.find({}).populate(['truck', 'route']);
        return orders;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAll = getAll;
const addTruckToOrder = (truckId, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const truck = yield (0, truck_services_1.getTruckById)(truckId);
        if (truck) {
            const order = yield (0, exports.getById)(orderId);
            if (order) {
                yield (0, exports.updateStatus)(orderId, 'in progress');
                order.truck.push(truckId);
                order.save();
                return order;
            }
            else
                return false;
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.addTruckToOrder = addTruckToOrder;
