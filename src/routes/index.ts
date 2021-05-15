import { Router } from 'express';

import reposRoutes from '../components/repos/repos.routes';
import favReposRoutes from '../components/favorites/favRepos.routes';

const router = Router();

router.get('/', (req, res) => res.redirect('/repos'));
router.use('/repos', reposRoutes);
router.use('/favorites', favReposRoutes);

export default router;
