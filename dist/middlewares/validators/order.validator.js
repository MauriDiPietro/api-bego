"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidator = void 0;
const express_validator_1 = require("express-validator");
const http_response_1 = require("../../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
exports.orderValidator = [
    (0, express_validator_1.check)('type', 'Insert type valid (string)')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    (0, express_validator_1.check)('description', 'Insert description valid (string)')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    (0, express_validator_1.check)('route', 'Insert route valid (string)')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    (0, express_validator_1.check)('status', 'Insert status valid (string)')
        .exists()
        .not()
        .isEmpty()
        .isString()
        .custom((value) => {
        const validStatusValues = ['planning', 'in progress', 'complete'];
        if (!validStatusValues.includes(value)) {
            throw new Error('Invalid status value. Insert status valid (planning, in progress, complete)');
        }
        return true;
    }),
    (req, res, next) => {
        try {
            (0, express_validator_1.validationResult)(req).throw();
            return next();
        }
        catch (error) {
            httpResponse.Unauthorized(res, error);
        }
    }
];
