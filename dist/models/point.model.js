"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointModel = void 0;
const mongoose_1 = require("mongoose");
const pointSchema = new mongoose_1.Schema({
    location: {
        name: {
            type: String,
            required: true,
        },
        placeId: {
            type: String,
            required: true,
        }
    }
}, {
    timestamps: true,
    versionKey: false,
});
exports.PointModel = (0, mongoose_1.model)("points", pointSchema);
