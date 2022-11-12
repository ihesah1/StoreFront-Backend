import express from 'express';
import { create, index, show } from "../../controllers/orderController";


const routes = express.Router();

routes.post('/create',create)
routes.get('/index',index)
routes.get('/index/:id',show)


export default routes;