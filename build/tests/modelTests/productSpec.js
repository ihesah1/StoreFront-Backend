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
const product_1 = require("../../models/product");
const productModel = new product_1.ProductModel;
describe('Testing Product Model ', () => {
    it("should create new product and return it ", () => __awaiter(void 0, void 0, void 0, function* () {
        const product = {
            product_name: "ju4",
            price: 5,
        };
        const newProduct = yield productModel.create(product);
        expect(newProduct).toEqual({
            id: 17,
            product_name: "ju4",
            price: 5,
        });
    }));
    it('Should return all products', () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield productModel.index();
        expect(products[0]).toBeTruthy();
    }));
    it('Should return product by id products', () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield productModel.indexById(11);
        expect(products).toBeTruthy();
    }));
});
