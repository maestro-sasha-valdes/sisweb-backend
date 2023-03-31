import { Router } from 'express';
import {getAllUsers} from '../controlers/userControler';

const userRouter = Router();

userRouter.get('/', getAllUsers);


export default userRouter;
