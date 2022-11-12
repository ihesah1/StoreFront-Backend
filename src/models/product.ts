import { index } from "../controllers/userController";
import Client from "../database";
import { product_type } from "../types/productType";

export class ProductModel{
        //create product\\
   async create(product:product_type):Promise<product_type>{
    
     const { product_name,price}=product
     const conn = await Client.connect();
     const sql = `INSERT INTO products(product_name,price)
     values($1,$2)RETURNING *`
     const result = await conn.query(sql,[product_name,price])
     conn.release();
     return result.rows[0];
   }


        //index all products\\
  async index():Promise<product_type[]>{
     const conn = await Client.connect();
     const sql = `SELECT * FROM products`
     const {rows} = await conn.query(sql);
     conn.release();
     return rows;    
    }
    
    //show me one product\\

  async indexById(id:Number):Promise<product_type>{
     const conn = await Client.connect();
     const sql = `SELECT * FROM products WHERE id=($1)`
     const result = await conn.query(sql,[id]);
     conn.release();
     return result.rows[0];    
    
  }
}