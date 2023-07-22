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
exports.isValidPassword = exports.createHash = void 0;
const bcryptjs_1 = require("bcryptjs");
/**
 * funcion que realiza el encriptado de contraseña a través de bcrypt con el método hash.
 * Recibe password sin encriptar,
 * retorna password encriptada
 * @param password tipo string
 * @returns password encriptada/hasheada
 */
const createHash = (password) => __awaiter(void 0, void 0, void 0, function* () { return (0, bcryptjs_1.hash)(password, 10); });
exports.createHash = createHash;
/**
 *
 * @param {*} user usuario encontrado en base de datos.
 * @param {*} password contraseña proporcionada por el usuario, sin encriptar.
 * @returns boolean
 */
const isValidPassword = (user, password) => __awaiter(void 0, void 0, void 0, function* () { return (0, bcryptjs_1.compare)(password, user.password); });
exports.isValidPassword = isValidPassword;
