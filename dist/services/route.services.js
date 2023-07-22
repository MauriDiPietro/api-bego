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
exports.remove = exports.update = exports.getById = exports.getAll = exports.getPointByPlaceId = exports.getDistance = exports.getCoordinates = exports.create = void 0;
const route_model_1 = require("../models/route.model");
const point_model_1 = require("../models/point.model");
const googleApi_handlers_1 = require("../utils/googleApi.handlers");
const create = (idPointA, idPointB) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pointA = yield point_model_1.PointModel.findById(idPointA);
        const pointB = yield point_model_1.PointModel.findById(idPointB);
        if (!pointA || !pointB) {
            return false;
        }
        const routeExist = yield route_model_1.RouteModel.findOne({
            route: `from: ${pointA.location.name} | to: ${pointB.location.name}`,
        });
        if (!routeExist) {
            const route = yield route_model_1.RouteModel.create({
                route: `from: ${pointA.location.name} | to: ${pointB.location.name}`,
            });
            return route;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.create = create;
const getCoordinates = (placeIdPointA, placeIdPointB) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pointA = yield (0, exports.getPointByPlaceId)(placeIdPointA);
        const pointB = yield (0, exports.getPointByPlaceId)(placeIdPointB);
        if (pointA && pointB) {
            const coordinatesA = yield (0, googleApi_handlers_1.getCoordinatesFromAddress)(pointA.location.name);
            const coordinatesB = yield (0, googleApi_handlers_1.getCoordinatesFromAddress)(pointB.location.name);
            return { pointA: coordinatesA, pointB: coordinatesB };
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCoordinates = getCoordinates;
const getDistance = (origin, destination) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const distance = yield (0, googleApi_handlers_1.getDistanceFromCoordinates)(origin, destination);
        if (distance)
            return distance;
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDistance = getDistance;
const getPointByPlaceId = (placeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const point = yield point_model_1.PointModel.findOne({ 'location.placeId': placeId });
        return point;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPointByPlaceId = getPointByPlaceId;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const routes = yield route_model_1.RouteModel.find({});
        return routes;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const route = yield route_model_1.RouteModel.findById(id);
        return route;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getById = getById;
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const routeExist = yield (0, exports.getById)(id);
        if (routeExist) {
            const routeUpdate = yield route_model_1.RouteModel.updateOne(body);
            return routeUpdate;
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
        const routeExist = yield (0, exports.getById)(id);
        if (routeExist) {
            const routeUpdate = yield route_model_1.RouteModel.deleteOne({ _id: id });
            return routeUpdate;
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.remove = remove;
