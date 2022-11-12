import Router from 'express';
import { create, showProduct } from '../../controllers/productController';
import { index } from '../../controllers/productController';
const routes = Router();


routes.post('/create',create);
routes.get('/show',index)
routes.get('/show/:id',showProduct)


export default routes;