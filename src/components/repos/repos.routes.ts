import { Router } from 'express';
import * as reposCtrl from './repos.controller';

const router = Router();

router.get('/:id', reposCtrl.getRepo);

router.post('/', reposCtrl.addRepo);

router.delete('/:id', reposCtrl.deleteRepo);

router.get('/', reposCtrl.getRepos);

export default router;
