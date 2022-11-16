import supertest from "supertest";
import  app  from "../../index";
import { product_type } from "../../types/productType";
const request = supertest(app);

describe('Products Controllers :',()=>{
    it('Get all the products endpoint ', async () => {
        const response = await request.get('/api/products/show');
        expect(response.status).toBe(200);
    });
    it ('Post the product create endpoint ', async ()=>{
        const prod :product_type ={
            product_name:'addidas',
            price:40
        }
        const response = await request.post('/api/products/create').send(prod);
        expect(response.status).toBe(200);
    })
    it('Get product by id will return 200 ',async()=>{
        const res = await request.get('/api/products/show/1');
        expect(res.status).toBe(200)
    })
})