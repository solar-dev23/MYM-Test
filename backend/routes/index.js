import express from 'express';

import authRoutes from './auth.routes';

const routes = () => {
  const router = express.Router();

  router.use('/auth', authRoutes());

  return router;
};

export default routes;
