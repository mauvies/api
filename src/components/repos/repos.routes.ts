import { Router } from 'express';
import * as reposCtrl from './repos.controller';

const router = Router();

router.get('/', reposCtrl.getRepos);

export default router;
