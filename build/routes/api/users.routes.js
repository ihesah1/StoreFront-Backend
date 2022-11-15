"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controllers/userController");
const userController_2 = require("../../controllers/userController");
const userController_3 = require("../../controllers/userController");
const routes = express_1.default.Router();
routes.post('/users/create', userController_1.create);
routes.get('/users', userController_2.index);
routes.get('/users/:id', userController_3.read);
routes.patch('/users/:id', userController_1.update);
routes.delete('/users/:id', userController_1.deleteUser);
routes.post('/auth', userController_1.auth);
exports.default = routes;
