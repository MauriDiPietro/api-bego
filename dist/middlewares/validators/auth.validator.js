"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const express_validator_1 = require("express-validator");
const http_response_1 = require("../../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
exports.userValidator = [
    (0, express_validator_1.check)('email', 'Insert email valid')
        .exists()
        .not()
        .isEmpty()
        .isEmail(),
    (0, express_validator_1.check)('password', 'Insert password valid (min 8 characters)')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 }),
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
