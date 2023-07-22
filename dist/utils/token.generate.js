"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const generateToken = (user) => {
    const JWT_KEY = config_1.default.JWT_KEY;
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = jsonwebtoken_1.default.sign(payload, JWT_KEY, {
    // expiresIn: '20m'
    });
    return token;
};
exports.generateToken = generateToken;
