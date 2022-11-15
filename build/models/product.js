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
exports.ProductModel = void 0;
const database_1 = __importDefault(require("../database"));
class ProductModel {
    //create product\\
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_name, price } = product;
            const conn = yield database_1.default.connect();
            const sql = `INSERT INTO products(product_name,price)
     values($1,$2)RETURNING *`;
            const result = yield conn.query(sql, [product_name, price]);
            conn.release();
            return result.rows[0];
        });
    }
    //index all products\\
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM products`;
            const { rows } = yield conn.query(sql);
            conn.release();
            return rows;
        });
    }
    //show me one product\\
    indexById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM products WHERE id=($1)`;
            const result = yield conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        });
    }
}
exports.ProductModel = ProductModel;
