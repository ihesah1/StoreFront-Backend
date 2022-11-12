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
const express_1 = require("express");
// import * as controllers from '../../controllers/userController';
const users_1 = require("../../models/users");
const routes = (0, express_1.Router)();
const userModel = new users_1.UserModel();
routes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("helllllllo");
    try {
        const user = userModel.create(req.body);
        res.json({
            status: 'Success',
            data: Object.assign({}, user),
            message: 'User Creates Successfully !',
        });
    }
    catch (error) {
        throw (error);
    }
}));
exports.default = routes;
