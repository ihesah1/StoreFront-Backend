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
const request = (0, supertest_1.default)(index_1.default);
describe('Products Controllers :', () => {
    it('Get all the products endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/products/show');
        expect(response.status).toBe(200);
    }));
    it('Post the product create endpoint ', () => __awaiter(void 0, void 0, void 0, function* () {
        const prod = {
            product_name: 'Nike',
            price: 40
        };
        const response = yield request.post('/api/products/create').send(prod);
        expect(response.status).toBe(200);
    }));
    it('Get product by id will return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/products/show/1');
        expect(res.status).toBe(200);
    }));
});
