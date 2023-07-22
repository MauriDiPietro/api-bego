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
exports.getAll = exports.getTruckById = void 0;
const truck_model_1 = require("../models/truck.model");
const getTruckById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const truck = yield truck_model_1.TruckModel.findById(id);
        return truck;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTruckById = getTruckById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trucks = yield truck_model_1.TruckModel.find({});
        return trucks;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAll = getAll;
