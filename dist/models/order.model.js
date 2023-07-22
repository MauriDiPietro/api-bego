"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    route: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "routes",
            default: []
        }
    ],
    status: {
        type: String,
        enum: ["planning", "in progress", "complete"],
        required: true,
    },
    truck: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "trucks",
            default: [],
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
exports.OrderModel = (0, mongoose_1.model)("orders", orderSchema);
