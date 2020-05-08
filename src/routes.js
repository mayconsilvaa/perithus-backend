import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

/** Controllers */
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductsController from './app/controllers/ProductsController';
import TributesController from './app/controllers/TributesController';

/** Validations */
import ValidateUserStore from './app/validations/UserStore';
import ValidateSessionStore from './app/validations/SessionStore';
import ValidateProductStore from './app/validations/ProductStore';
import ValidateProductUpdate from './app/validations/ProductUpdate';

const routes = new Router();

// route init

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Api Financeiro Study 1.0',
  });
});

// route register

routes.post('/users', ValidateUserStore, UserController.store);

// route login

routes.post('/login', ValidateSessionStore, SessionController.store);

// route esquece a senha

// routes.post('/password/forget', ValidateForgetUpdate, ForgetPassword.store);
// routes.put('/password/update', ValidateForgetStore, ForgetPassword.update);

// routes autenticadas

routes.use(authMiddleware);

// route product

routes.get('/product/:year/:month', ProductsController.index);
routes.post('/product', ValidateProductStore, ProductsController.store);
routes.get('/product/:productId', ProductsController.show);
routes.put(
  '/product/:productId',
  ValidateProductUpdate,
  ProductsController.update
);
routes.delete('/product/:productId', ProductsController.destroy);

// route tributes

routes.get('/tribute/:year/:month', TributesController.index);
routes.post('/tribute', TributesController.store);
routes.get('/tribute/:tributeId', TributesController.show);
routes.put('/tribute/:tributeId', TributesController.update);
routes.delete('/tribute/:tributeId', TributesController.destroy);

export default routes;
