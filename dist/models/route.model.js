"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModel = void 0;
const mongoose_1 = require("mongoose");
const routeSchema = new mongoose_1.Schema({
    route: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.RouteModel = (0, mongoose_1.model)("routes", routeSchema);
