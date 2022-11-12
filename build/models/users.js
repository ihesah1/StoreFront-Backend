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
//this class represent the database
console.log("helo2");
// Create a User :
class UserModel {
    // Create User \\
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            //open connection
            try {
                const conn = yield database_1.default.connect();
                console.log("done connection");
                //write query
                const sql = `INSERT INTO users(email,first_name,last_name,password)
        values($1,$2,$3, $4) returning *`;
                console.log(" done write the sql");
                // const  {email,first_name,last_name,password}=user;
                //run query
                console.log("run the sql1");
                const result = yield conn.query(sql, [
                    user.email,
                    user.first_name,
                    user.last_name,
                    user.password
                ]);
                // console.log(user?.email);
                //close the connection 
                conn.release();
                return result.rows[0];
            }
            //Read the user \\
            //Read user by id \\
            finally {
            }
            //Read the user \\
            //Read user by id \\
        });
    }
}
exports.UserModel = UserModel;
