"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeValidator = void 0;
const express_validator_1 = require("express-validator");
const http_response_1 = require("../../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
exports.routeValidator = [
    (0, express_validator_1.check)('route')
        .exists()
        .not()
        .isEmpty()
        .isString(),
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
