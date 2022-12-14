import express  from "express";
import {auth, create, deleteUser, update} from '../../controllers/userController';
import { index } from "../../controllers/userController";
import { read } from "../../controllers/userController";


const routes = express.Router();


routes.post('/users/create', create);
routes.get('/users',index);
routes.get('/users/:id',read)
routes.patch('/users/:id', update)
routes.delete('/users/:id', deleteUser)
routes.post('/auth',auth)



export default routes;