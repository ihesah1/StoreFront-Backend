//all routes is here ..
//main index  
import { Router } from "express";
import express from "express";
import userRoute from './api/users.routes';
import orderRoute from './api/orders.routes';
import productRoute from './api/product.routes';

const routes = express();

routes.use('/',userRoute)
routes.use('/products', productRoute)
routes.use('/orders', orderRoute)


export default routes;
