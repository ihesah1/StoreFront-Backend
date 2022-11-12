"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./api/users.routes"));
const orders_routes_1 = __importDefault(require("./api/orders.routes"));
const orders_routes_2 = __importDefault(require("./api/orders.routes"));
const routes = (0, express_1.default)();
routes.use('/users', users_routes_1.default);
routes.use('/products', orders_routes_2.default);
routes.use('/orders', orders_routes_1.default);
exports.default = routes;
