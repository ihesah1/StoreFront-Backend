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
exports.UserModel = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
//this class represent the database
class UserModel {
    // Create User \\
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, first_name, last_name, password } = user;
            //open connection
            try {
                const conn = yield database_1.default.connect();
                //write query
                const sql = `INSERT INTO users(email,first_name,last_name,password)
        values($1,$2,$3,$4) returning *`;
                const hash = bcrypt_1.default.hashSync(password + BCRYPT_PASSWORD, parseInt(SALT_ROUNDS, 10));
                //run query
                const { rows } = yield conn.query(sql, [
                    email,
                    first_name,
                    last_name,
                    hash
                ]);
                //close the connection 
                conn.release();
                return rows[0];
            }
            catch (er) {
                throw (er);
            }
        });
    }
    //show me all users \\
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM users `;
            const result = yield conn.query(sql);
            conn.release();
            return result.rows;
        });
    }
    //show me one user by id \\   
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = `SELECT * FROM users WHERE id=($1)`;
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Cannot get id ${err}`);
            }
        });
    }
    //update user \\
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, first_name, last_name, password } = user;
                const conn = yield database_1.default.connect();
                const sql = `UPDATE users SET email=$1 ,first_name=$2, last_name=$3, password=$4 WHERE id=$5 Returning *`;
                const result = yield conn.query(sql, [
                    email,
                    first_name,
                    last_name,
                    password,
                    id,
                ]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`there is error update ${err}`);
            }
        });
    }
    //Delete User by id \\
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `DELETE FROM users WHERE id=$1 RETURNING * `;
            const result = yield conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        });
    }
    auth(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT password FROM users WHERE email=($1) `;
            const { rows } = yield conn.query(sql, [email]);
            console.log(password + BCRYPT_PASSWORD);
            if (rows.length > 0) {
                const user = rows[0];
                console.log(user);
                if (bcrypt_1.default.compareSync(password + BCRYPT_PASSWORD, user.password)) {
                    return user;
                }
            }
            conn.release();
            return null;
        });
    }
}
exports.UserModel = UserModel;
