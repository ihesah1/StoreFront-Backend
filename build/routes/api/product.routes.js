"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../../controllers/productController");
const productController_2 = require("../../controllers/productController");
const routes = (0, express_1.default)();
routes.post('/create', productController_1.create);
routes.get('/show', productController_2.index);
routes.get('/show/:id', productController_1.showProduct);
exports.default = routes;
