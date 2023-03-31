import { Router } from 'express';
import productRoutes from './productRoutes';
import orderRoutes from './orderRoutes';
import userRoutes from './userRoutes';

const apiRouter = Router();  

apiRouter.use('/product', productRoutes);
apiRouter.use('/order', orderRoutes);
apiRouter.use('/user', userRoutes);

apiRouter.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default apiRouter;