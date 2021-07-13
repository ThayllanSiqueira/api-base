import { Router } from 'express';
import homeController from '../../controllers/HomeController';

const router = new Router();

router.get('/', (req, res) => {
  const resp = homeController.index();
  res.send(resp);
});

export default router;
