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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const users_1 = require("../../models/users");
const request = (0, supertest_1.default)(index_1.default);
const userModel = new users_1.UserModel();
let token;
describe('order Controllers :', () => {
    it('post - create endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const order = {
            id: 11,
            status: "active",
            user_id: 1
        };
        const response = yield request.post('/api/orders/create').send(order);
        expect(response.status).toBe(200);
    }));
    it('Get all the orders endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/orders');
        expect(response.status).toBe(200);
    }));
    it('Get order by id will return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/orders/index/1');
        expect(res.status).toBe(200);
    }));
});
