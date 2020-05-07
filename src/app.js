import './bootstrap';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(cors());
  }

  routes() {
    this.server.use('/api', routes);
  }
}

export default new App().server;
