import supertest from "supertest";
import Client from "../../database";
import  app  from "../../index";
import { UserModel } from "../../models/users";
import { order_type } from "../../types/orderType";
const request = supertest(app);
const userModel = new UserModel();

describe('order Controllers :',()=>{
 
    it ('post - create endpoint ', async ():Promise<void>=>{
        const order :order_type ={
            id:13,
            status:"active",
            user_id:1
                    }
        const response = await request.post('/api/orders/create').send(order)
        expect(response.status).toBe(200);
    })
    
  

    it('Get all the orders endpoint ', async ():Promise<void>=> {
        const response = await request.get('/api/orders');
        expect(response.status).toBe(200);
    });

    it('Get order by id will return 200 ',async()=> {
        const res = await request.get('/api/orders/index/1');
        expect(res.status).toBe(200)
    });
  })