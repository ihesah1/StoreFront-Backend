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
const order_1 = require("../../models/order");
const orderModel = new order_1.OrdersModel();
describe('Test Order Model ', () => {
    it("should create new order and return new order record", () => __awaiter(void 0, void 0, void 0, function* () {
        const order = {
            id: 9,
            status: "active",
            user_id: 1,
        };
        const newOrder = yield orderModel.create(order);
        expect(newOrder).toEqual({
            id: 9,
            status: "active",
            user_id: 1,
        });
    }));
    it('Should return all orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const orders = yield orderModel.index();
        expect(orders[0]).toBeTruthy();
    }));
    it('Should return product by id orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield orderModel.show(1);
        expect(order).toBeTruthy();
    }));
});
