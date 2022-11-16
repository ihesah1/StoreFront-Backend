import { ProductModel } from "../../models/product";
import { product_type } from "../../types/productType";

const productModel = new ProductModel
describe('Testing Product Model ', ()=>{
  it("should create new product and return it ", async (): Promise<void> => {
    const product: product_type = {
      product_name: "pen",
      price: 5,
    };
    const newProduct: product_type = await productModel.create(product);
    expect(newProduct).toEqual({
      id: 18,
      product_name: "pen",
      price: 5,
    });
  });
  
  it('Should return all products',async()=>{
    const products = await productModel.index()
    expect(products[0]).toBeTruthy();
  })
  it('Should return product by id products',async()=>{
    const products = await productModel.indexById(11)
    expect(products).toBeTruthy();
  })
  
})