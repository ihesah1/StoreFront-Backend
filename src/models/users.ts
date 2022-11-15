import { Query, QueryResult } from "pg";
import Client from "../database";
import {user_type} from '../types/userType';
import bcrypt from 'bcrypt';

const {BCRYPT_PASSWORD, SALT_ROUNDS} = process.env

//this class represent the database
export class UserModel{

              // Create User \\
    async create(user:user_type):Promise<user_type>{
       
        const {email,first_name,last_name,password}=user;
        //open connection
      try{  
        const conn = await Client.connect();
        //write query
         const sql = `INSERT INTO users(email,first_name,last_name,password)
        values($1,$2,$3,$4) returning *`;
         const hash = bcrypt.hashSync(password + BCRYPT_PASSWORD,
            parseInt(SALT_ROUNDS as string ,10)
        )
        //run query
        const { rows } = await conn.query(sql,[
            email,
            first_name,
            last_name,
            hash
        ]);
        //close the connection 
        conn.release();
        return rows[0]
     }catch(er){
       throw(er)
        }
    }
             //show me all users \\
    async index():Promise<user_type[]>{
        const conn = await Client.connect();
        const sql = `SELECT * FROM users `;
        const result = await conn.query(sql);
        conn.release();
        return result.rows;
    } 

    
             //show me user by id \\   
    async getUserById(id:Number):Promise<user_type>{
    try{
        const conn = await Client.connect();
        const sql = `SELECT * FROM users WHERE id=($1)`
        const result = await conn.query(sql,[id]);
        conn.release();
        return result.rows[0];

    }catch(err){
        throw new Error(`Cannot get id ${err}`)
    }}

            //update user \\
    
    async update(id:number,user:user_type):Promise<user_type>{
        try{
            const {email,first_name,last_name,password}=user;
            const conn=await Client.connect();
            const sql = `UPDATE users SET email=$1 ,first_name=$2, last_name=$3, password=$4 WHERE id=$5 Returning *`
            const result = await conn.query(sql,[
                email,
                first_name,
                last_name,
                password,
                id,
            ])
            conn.release();
            return result.rows[0]
        }catch(err){
            throw new Error(`there is error update ${err}`)
        }
    }

          //Delete User by id \\
    async delete(id:number):Promise<user_type>{
        const conn = await Client.connect();
        const sql = `DELETE FROM users WHERE id=$1 RETURNING * `
        const result = await conn.query(sql,[id])
        conn.release();
        return result.rows[0]
    }


      async auth(email:string, password:string):Promise<user_type | null>{
        const conn = await Client.connect();
        const sql = `SELECT password FROM users WHERE email=($1) `
        const {rows} = await conn.query(sql,[email])
       
        console.log(password+BCRYPT_PASSWORD);
        
        if (rows.length > 0) {
            const user = rows[0]
            console.log(user);
            
            if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
              return user
            }
      } conn.release();
      return null;
}
}             
