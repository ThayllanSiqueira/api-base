import { Router } from 'express';

import homeRoutes from './api/homeRoutes';
import alunoRoutes from './api/alunoRoutes';

const router = new Router();

router.use('/', homeRoutes);
router.use('/alunos', alunoRoutes);

export default router;
