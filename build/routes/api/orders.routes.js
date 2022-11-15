"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../../controllers/orderController");
const routes = express_1.default.Router();
routes.post('/create', orderController_1.create);
routes.get('/', orderController_1.index);
routes.get('/index/:id', orderController_1.show);
routes.post('/product', orderController_1.createProdToOrder); //add product to order by id of user
routes.get('/user/:id', orderController_1.getOrderUser);
routes.get('/product/:id', orderController_1.getProductOrder);
routes.delete('/:id', orderController_1.deleteOrder);
exports.default = routes;
