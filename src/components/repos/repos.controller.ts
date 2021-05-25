import { RequestHandler } from 'express';

import { fetchOwnerAccount, fetchOwnerRepos } from '../../services/api';
import { reposPrepareResource, ownerPrepareResource } from './repos.resources';
import FavRepo, { checkIfRepoIsFav } from '../favorites/FavRepo.model';
import { IRepoResource, IOwnerResource } from './repos.interfaces';

export const getRepos: RequestHandler = async (req, res) => {
  const { owner, page } = req.body;
  try {
    const ownerGeneralInfo = await fetchOwnerAccount(owner);
    const ownerRepos = await fetchOwnerRepos(owner, page);

    const reposResource: IRepoResource[] = reposPrepareResource(ownerRepos);
    const favRepos = await FavRepo.find();
    const reposResourceCheckedIfFav = checkIfRepoIsFav(reposResource, favRepos);

    const ownerResource: IOwnerResource = ownerPrepareResource(
      ownerGeneralInfo,
      reposResourceCheckedIfFav,
      page
    );

    return res.json({
      status: 200,
      msg: 'Repos successfully fetched',
      data: ownerResource,
    });
  } catch (error) {
    return res.status(404).json({ error: `Something went wrong` });
  }
};
