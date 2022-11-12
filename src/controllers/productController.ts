import { Request,Response } from "express"
import { userInfo } from "os";
import { ProductModel } from "../models/product"
import { product_type } from "../types/productType";

const productModel = new ProductModel();

export const create = async(req:Request,res:Response)=>{
    try {
    //     const product_name = req.body.product_name as unknown as string;
    // const price = req.body.price as unknown as number
    const product = await productModel.create(req.body)
    res.json({
        status:200,
        message:'Product Created Successfully.',
        data:{...product}
    })
}catch(err){
    throw new Error(`there is error in handlers ${err}`)
}}

export const index = async(req:Request,res:Response)=>{
   const product= await productModel.index()
   res.json({
    message:'Success',
    data:{...product}
   })
}
export const showProduct = async(req:Request,res:Response)=>{
    const productId:product_type = await productModel.indexById(req.params.id as unknown as number);
    res.json({
        status:'Success',
        message:'The Product is retrived Successfully.',
        data:{...productId}
    })
}
