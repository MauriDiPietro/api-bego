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
exports.remove = exports.update = exports.getById = exports.getAll = exports.getDistance = exports.getCoordinates = exports.create = void 0;
const services = __importStar(require("../services/route.services"));
const http_response_1 = require("../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idPointA } = req.params;
        const { idPointB } = req.params;
        const route = yield services.create(idPointA, idPointB);
        if (route)
            return httpResponse.Ok(res, route);
        else
            return httpResponse.NotFound(res, 'Error creating route');
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.create = create;
const getCoordinates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { placeIdPointA } = req.params;
        const { placeIdPointB } = req.params;
        const coordinates = yield services.getCoordinates(placeIdPointA, placeIdPointB);
        if (coordinates)
            return httpResponse.Ok(res, coordinates);
        else
            return httpResponse.NotFound(res, 'Error loading coordinates');
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.getCoordinates = getCoordinates;
const getDistance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { placeIdPointA } = req.params;
        const { placeIdPointB } = req.params;
        const coordinates = yield services.getCoordinates(placeIdPointA, placeIdPointB);
        if (coordinates) {
            const origin = `${coordinates.pointA.latitude}, ${coordinates.pointA.longitude}`;
            const destination = `${coordinates.pointB.latitude}, ${coordinates.pointB.longitude}`;
            const distance = yield services.getDistance(origin, destination);
            return httpResponse.Ok(res, distance);
        }
        else
            return httpResponse.NotFound(res, 'Error loading distance');
    }
    catch (error) {
        console.log();
        return httpResponse.ServerError(res, error);
    }
});
exports.getDistance = getDistance;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const routes = yield services.getAll();
        return httpResponse.Ok(res, routes);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const route = yield services.getById(id);
        return httpResponse.Ok(res, route);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.getById = getById;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updRoute = yield services.update(id, req.body);
        if (updRoute)
            return httpResponse.Ok(res, updRoute);
        else
            return httpResponse.NotFound(res, 'Error updating route');
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
        const delRoute = yield services.remove(id);
        if (delRoute)
            return httpResponse.Ok(res, delRoute);
        else
            return httpResponse.NotFound(res, 'Error removing route');
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.remove = remove;
