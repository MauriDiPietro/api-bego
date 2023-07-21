import { hash, compare } from 'bcryptjs';
import { Auth } from '../interfaces/auth.interface';

/**
 * funcion que realiza el encriptado de contraseña a través de bcrypt con el método hash. 
 * Recibe password sin encriptar,
 * retorna password encriptada
 * @param password tipo string
 * @returns password encriptada/hasheada
 */
export const createHash = async(password: string) => hash(password, 10);

/**
 * 
 * @param {*} user usuario encontrado en base de datos.
 * @param {*} password contraseña proporcionada por el usuario, sin encriptar.
 * @returns boolean
 */
export const isValidPassword = async(user: Auth, password: string) => compare(password, user.password);