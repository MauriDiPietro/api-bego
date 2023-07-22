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
exports.login = exports.register = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_handler_1 = require("../utils/bcrypt.handler");
const register = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUser = yield user_model_1.UserModel.findOne({ email });
        if (existUser === null) {
            const passHash = yield (0, bcrypt_handler_1.createHash)(password);
            const newUser = yield user_model_1.UserModel.create({ email, password: passHash });
            return newUser;
        }
        else
            return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.register = register;
const login = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existUser = yield user_model_1.UserModel.findOne({ email });
        if (existUser !== null) {
            const passValid = yield (0, bcrypt_handler_1.isValidPassword)(existUser, password);
            if (!passValid)
                return null;
            else
                return existUser;
        }
        else
            return null;
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;
