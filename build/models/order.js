"use strict";
//Create order 
//Read order 
//Update order 
//Delete order 
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
exports.OrdersModel = void 0;
const database_1 = __importDefault(require("../database"));
class OrdersModel {
    create(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, status, user_id } = order;
            const conn = yield database_1.default.connect();
            const sql = `INSERT INTO orders(id,status,user_id)values($1,$2,$3) RETURNING *`;
            const result = yield conn.query(sql, [id, status, user_id]);
            conn.release();
            return result.rows[0];
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM orders `;
            const result = yield conn.query(sql);
            conn.release();
            return result.rows;
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM orders WHERE id=$1 `;
            const result = yield conn.query(sql, [id]);
            conn.release();
            return result.rows;
        });
    }
    update(id, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status, user_id } = order;
            const conn = yield database_1.default.connect();
            const sql = `UPDATE orders SET status=$1,user_id=$2 WHERE id=$3 RETURNING *`;
            const result = yield conn.query(sql, [status, user_id]);
            conn.release();
            return result.rows[0];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `DELETE FROM orders WHERE id=$1 RETURNING * `;
            const result = yield conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        });
    }
    //Products in Order\\
    addProductToOrder(p_o) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const { order_id, product_id, quantity } = p_o;
            const sql = `INSERT INTO products_order(order_id,product_id,quantity)values($1,$2,$3)
        RETURNING *`;
            const result = yield conn.query(sql, [order_id, product_id, quantity]);
            conn.release();
            return result.rows[0];
        });
    }
    getProductFromOrder(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT product_id FROM products_order WHERE id=$1`;
            const result = yield conn.query(sql, [productId]);
            conn.release();
            return result.rows[0];
        });
    }
    getOrdersByUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = `SELECT * FROM products_order WHERE user_id=$1`;
            const result = yield conn.query(sql, [id]);
            conn.release();
            return result.rows;
        });
    }
}
exports.OrdersModel = OrdersModel;
