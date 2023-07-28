import main from './main.js';
import { redisPage, redisHandler } from './redis.js';
import { postgresHandler, postgresPage } from './postgres.js';

const routes = (app) => {
  app.get('/', main);

  app.get('/redis', redisPage);
  app.post('/redis', redisHandler);

  app.get('/postgres', postgresPage);
  app.post('/postgres', postgresHandler);
};

export default routes;
