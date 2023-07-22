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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceFromCoordinates = exports.getCoordinatesFromAddress = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const API_KEY_GOOGLE = config_1.default.API_KEY_GOOGLE;
const getCoordinatesFromAddress = (address) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: API_KEY_GOOGLE,
            },
        });
        const results = response.data.results;
        if (results.length > 0) {
            const location = results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
            return { latitude, longitude };
        }
        else {
            throw new Error('No se encontraron resultados para la dirección proporcionada.');
        }
    }
    catch (error) {
        throw new Error('Error al obtener las coordenadas: ' + error);
    }
});
exports.getCoordinatesFromAddress = getCoordinatesFromAddress;
/**
 *
 * @param origin coordenada de origen
 * @param destination coordenada de destino
 * @returns distancia en KM entre coordenadas
 */
const getDistanceFromCoordinates = (origin, destination) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://maps.googleapis.com/maps/api/directions/json', {
            params: {
                origin: origin,
                destination: destination,
                key: API_KEY_GOOGLE,
                units: 'metric', // Para obtener la distancia en kilómetros
            },
        });
        const routes = response.data.routes;
        if (routes.length > 0) {
            const distance = routes[0].legs[0].distance.text;
            return distance;
        }
        else {
            throw new Error('No se encontraron rutas para las coordenadas proporcionadas.');
        }
    }
    catch (error) {
        throw new Error('Error al obtener la distancia: ' + error);
    }
});
exports.getDistanceFromCoordinates = getDistanceFromCoordinates;
