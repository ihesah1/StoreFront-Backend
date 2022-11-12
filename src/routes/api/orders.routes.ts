import express from 'express';
import { create, index, show ,createProdToOrder,getOrderUser,getProductOrder} from "../../controllers/orderController";


const routes = express.Router();

routes.post('/create',create)
routes.get('/index',index)
routes.get('/index/:id',show)
routes.post('/product',createProdToOrder) //add product to order by id of user
routes.get('/user/:id',getOrderUser)
routes.get('/product/:id',getProductOrder)


export default routes;