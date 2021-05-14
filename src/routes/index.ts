import { Router } from 'express';

import reposRoutes from '../components/repos/repos.routes';

const router = Router();

router.get('/', (req, res) => res.redirect('/repos'));
router.use('/repos', reposRoutes);

export default router;
