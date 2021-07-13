import { Router } from 'express';
import alunoController from '../../controllers/AlunoController';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const alunos = await alunoController.index();
    res.json(alunos);
  } catch (err) {
    res.status(500);
    next(err);
  }
});

export default router;
