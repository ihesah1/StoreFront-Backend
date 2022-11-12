// //Implement Logic 
import { Request,Response } from "express";
import { UserModel} from "../models/users";
import { user_type } from "../types/userType";
//اخذ نسخه من هذا الموديل لان كلاس 
const userModel = new UserModel();
console.log("here");

export const create = async( req:Request, res:Response)=>{
    try{
       const email = req.body.email as unknown as string
       const first_name = req.body.first_name as unknown as string
       const last_name = req.body.last_name as unknown as string
       const password = req.body.password as unknown as string

       const newUser:user_type = await userModel.create({email,first_name,last_name,password});
     if(newUser){
       res.json({
       status:'Success',
       data:{ ...newUser },
       message:'User Creates Successfully !',
   });
     }else{
       res.status(400).json({error:'user not creates'});
           
     }    
   }catch(error){
       throw (error)
   }
}
export const index = async (req:Request,res:Response)=>{
    const user:user_type[]= await userModel.index();
    res.json(user)
}

export const read = async(req:Request,res:Response)=>{
    //اضافة try,catch 
    try{
    const userId = await userModel.getUserById(req.params.id as unknown as Number)
    if (userId!=undefined){
      res.json({
        status:'Success',
        data:{... userId}
    })}else{
        res.json({
            status:'Faild',
            message:' The user Id you try to retrive  does not exist !'
        })
    }
    }catch(err){
    throw new Error(`There is error ${err}`)
}
    // const user = await userModel.show(req.params.id as unknown as Number)
}
export const update = async(req:Request,res:Response)=>{
 try{   
    const id = req.params.id as unknown as number;
    const email = req.body.email as unknown as string;
    const first_name = req.body.first_name as unknown as string;
    const last_name = req.body.last_name as unknown as string;
    const password = req.body.password as unknown as string;

   
    const updatedUser = await userModel.update(id,{email,first_name,last_name,password})
    res.json({
        message :'the user Updataed successfully',
        data : {...updatedUser}
    })}catch(err){
      throw new Error(`something was ereeor ${err}`)

    }
}

export const deleteUser = async(req:Request,res:Response)=>{
    const delUser = await userModel.delete(req.params.id as unknown as number)
    res.json({
        message:'the user deleted Successfully .',
        data:{ delUser }
    })
}
