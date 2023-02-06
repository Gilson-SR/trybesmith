import express from 'express';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import ordersRouter from './routers/ordersRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
