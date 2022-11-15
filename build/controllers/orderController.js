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
exports.getProductOrder = exports.getOrderUser = exports.createProdToOrder = exports.deleteOrder = exports.show = exports.index = exports.create = void 0;
const order_1 = require("../models/order");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const orderModel = new order_1.OrdersModel();
//create order 
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orderModel.create(req.body);
        try {
            jsonwebtoken_1.default.verify(req.body.token, process.env.TOKEN_SECRET);
        }
        catch (err) {
            res.status(401);
            res.json(`Invalid Token ${err}`);
            return;
        }
        res.json({
            message: "The order created Successfully .",
            data: { orders }
        });
    }
    catch (err) {
        throw new Error(`there is error in handlers ${err}`);
    }
});
exports.create = create;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield orderModel.index();
    res.json({
        data: { orders }
    });
});
exports.index = index;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = yield orderModel.show(req.params.id);
    res.json({
        data: { orderId }
    });
});
exports.show = show;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = yield orderModel.delete(req.params.id);
    res.json(orderId);
});
exports.deleteOrder = deleteOrder;
////Add product to order
const createProdToOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product_order = yield orderModel.addProductToOrder(req.body);
    res.json(product_order);
});
exports.createProdToOrder = createProdToOrder;
const getOrderUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = yield orderModel.getOrdersByUser(req.params.id);
        res.json(userId);
    }
    catch (err) {
        throw new Error(`${err}`);
    }
});
exports.getOrderUser = getOrderUser;
const getProductOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = yield orderModel.getProductFromOrder(req.params.id);
        res.json(productId);
    }
    catch (err) {
        throw new Error(`${err}`);
    }
});
exports.getProductOrder = getProductOrder;
