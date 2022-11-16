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
exports.auth = exports.deleteUser = exports.update = exports.read = exports.index = exports.create = void 0;
const users_1 = require("../models/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { TOKEN_SECRET } = process.env;
const userModel = new users_1.UserModel();
console.log("here");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = req.body.password;
    try {
        const newUser = yield userModel.create({ email, first_name, last_name, password });
        let token = jsonwebtoken_1.default.sign(newUser, TOKEN_SECRET);
        if (newUser) {
            res.status(201).json(token);
        }
        else {
            res.status(400).json({ error: 'User was not created' });
        }
        //        res.json({
        //        status:'Success', 
        //        data:{ token , newUser},
        //        message:'User Creates Successfully !',
        //    });
    }
    catch (error) {
        throw (error);
    }
});
exports.create = create;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel.index();
    res.json(user);
});
exports.index = index;
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = yield userModel.getUserById(req.params.id);
        if (userId != undefined) {
            res.json({
                status: 'Success',
                data: Object.assign({}, userId)
            });
        }
        else {
            res.json({
                status: 'Faild',
                message: ' The user Id you try to retrive  does not exist !'
            });
        }
    }
    catch (err) {
        throw new Error(`There is error ${err}`);
    }
    // const user = await userModel.show(req.params.id as unknown as Number)
});
exports.read = read;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const email = req.body.email;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const password = req.body.password;
        const updatedUser = yield userModel.update(id, { email, first_name, last_name, password });
        res.json({
            message: 'the user Updataed successfully',
            data: Object.assign({}, updatedUser)
        });
    }
    catch (err) {
        throw new Error(`something was ereeor ${err}`);
    }
});
exports.update = update;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delUser = yield userModel.delete(req.params.id);
        res.json({
            message: 'the user deleted Successfully .',
        });
    }
    catch (err) {
        throw new Error(`${err}`);
    }
});
exports.deleteUser = deleteUser;
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel.auth(email, password);
        res.json(user);
    }
    catch (err) {
        throw new Error(`${err}`);
    }
});
exports.auth = auth;
