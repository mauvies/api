import { Router } from 'express';
import * as favRepos from './favRepos.controller';

const router = Router();

router.get('/', favRepos.getFavRepos);

router.post('/', favRepos.addRepo);

router.delete('/:id', favRepos.deleteRepo);

export default router;
