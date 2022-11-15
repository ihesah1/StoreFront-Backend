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
exports.showProduct = exports.index = exports.create = void 0;
const product_1 = require("../models/product");
const productModel = new product_1.ProductModel();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //     const product_name = req.body.product_name as unknown as string;
        // const price = req.body.price as unknown as number
        const product = yield productModel.create(req.body);
        res.json({
            status: 200,
            message: 'Product Created Successfully.',
            data: Object.assign({}, product)
        });
    }
    catch (err) {
        throw new Error(`there is error in handlers ${err}`);
    }
});
exports.create = create;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel.index();
    res.json({
        message: 'Success',
        data: Object.assign({}, product)
    });
});
exports.index = index;
const showProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = yield productModel.indexById(req.params.id);
    res.json({
        status: 'Success',
        message: 'The Product is retrived Successfully.',
        data: Object.assign({}, productId)
    });
});
exports.showProduct = showProduct;
