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
exports.login = exports.register = void 0;
const services = __importStar(require("../services/auth.services"));
const http_response_1 = require("../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
const token_generate_1 = require("../utils/token.generate");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield services.register(req.body);
        if (!newUser)
            return httpResponse.Unauthorized(res, 'User registered in database');
        else
            return httpResponse.Ok(res, newUser);
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield services.login(req.body);
        if (!user)
            return httpResponse.Unauthorized(res, 'Invalid credentials');
        if (user !== null) {
            const access_token = (0, token_generate_1.generateToken)(user);
            res.header('Authorization', access_token);
            return httpResponse.Ok(res, access_token);
        }
    }
    catch (error) {
        console.log(error);
        return httpResponse.ServerError(res, error);
    }
});
exports.login = login;
