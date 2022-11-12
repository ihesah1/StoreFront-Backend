//Create order 
//Read order 
//Update order 
//Delete order 

import Client from "../database";
import { order_type } from "../types/orderType";
import { product_order } from "../types/products_order";


export class OrdersModel{
    async create(order:order_type):Promise<order_type>{
        const {id,status,user_id}=order;
        const conn = await Client.connect();
        const sql = `INSERT INTO orders(id,status,user_id)values($1,$2,$3) RETURNING *`
        const result = await conn.query(sql,[id,status,user_id])
        conn.release();
        return result.rows[0];
    }
    async index():Promise<order_type[]>{
        const conn = await Client.connect();
        const sql = `SELECT * FROM orders `
        const result = await conn.query(sql)
        conn.release();
        return result.rows;
    }
    async show(id:number):Promise<order_type[]>{
        const conn = await Client.connect();
        const sql = `SELECT * FROM orders WHERE id=$1 `
        const result = await conn.query(sql,[id])
        conn.release();
        return result.rows;
    }
    async update(id:number,order:order_type):Promise<order_type>{
        const{status,user_id}=order;
        const conn = await Client.connect();
        const sql = `UPDATE orders SET status=$1,user_id=$2 WHERE id=$3 RETURNING *`
        const result = await conn.query(sql,[status,user_id]);
        conn.release();
        return result.rows[0];
    }



              //Products in Order\\
              
    async addProductToOrder(p_o:product_order):Promise<product_order>{
        const conn = await Client.connect();
        const {order_id,product_id,quantity}=p_o;
        const sql = `INSERT INTO products_order(order_id,product_id,quantity)values($1,$2,$3)
        RETURNING *`
        const result = await conn.query(sql,[order_id,product_id,quantity])
        conn.release();
        return result.rows[0];
    }
    async getProductFromOrder(productId:number):Promise<product_order>{
        const conn = await Client.connect();
        const sql = `SELECT product_id FROM products_order WHERE id=$1`
        const result = await conn.query(sql,[productId])
        conn.release();
        return result.rows[0];
    }
    
    async getOrdersByUser(id:number):Promise<product_order[]>{
        const conn = await Client.connect();
        const sql =`SELECT * FROM products_order WHERE user_id=$1`;
        const result = await conn.query(sql,[id])
        conn.release();
        return result.rows;
    }
}