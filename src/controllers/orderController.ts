import { OrdersModel } from "../models/order";
import { order_type } from "../types/orderType";
import { Request,Response } from "express";

const orderModel = new OrdersModel();

export const create = async(req:Request,res:Response)=>{
    try {
    const orders:order_type = await orderModel.create(req.body)
    res.json({
        message:"The order created Successfully .",
        data:{orders}
    })
}catch(err){
    throw new Error(`there is error in handlers ${err}`)
}}
export const index = async(req:Request,res:Response)=>{
    const orders = await orderModel.index();
    res.json({
        data:{orders}
    })
}
export const show = async(req:Request,res:Response)=>{
    const orderId = await orderModel.show(req.params.id as unknown as number);
    res.json({
        data:{orderId}
    })
}