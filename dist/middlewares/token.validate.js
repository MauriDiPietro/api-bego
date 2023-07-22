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
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const http_response_1 = require("../utils/http.response");
const user_model_1 = require("../models/user.model");
const httpResponse = new http_response_1.HttpResponse();
const JWT_KEY = config_1.default.JWT_KEY;
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.get('Authorization');
        if (!authHeader)
            return httpResponse.Unauthorized(res, 'Unauthorized');
        const token = authHeader.split(' ')[1];
        const decode = jsonwebtoken_1.default.verify(token, JWT_KEY);
        console.log(decode);
        const user = yield user_model_1.UserModel.findById(decode._id);
        if (!user)
            return httpResponse.Unauthorized(res, 'Unauthorized');
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.validateToken = validateToken;
