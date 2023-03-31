import { Router } from 'express';
import {getAllOrders} from '../controlers/orderControler';

const orderRouter = Router();

orderRouter.get('/', getAllOrders);


export default orderRouter;
