import { Router } from 'express';

import favReposRoutes from '../components/favorites/favRepos.routes';

const router = Router();

router.get('/', (req, res) => res.redirect('/repos'));
router.use('/favorites', favReposRoutes);

export default router;
