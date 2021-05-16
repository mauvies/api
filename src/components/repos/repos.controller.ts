import { RequestHandler } from 'express';

import { fetchOwnerAccount, fetchOwnerRepos } from '../../services/fetchApi';
import { reposPrepareResource, ownerPrepareResource } from './repos.resources';
import FavRepo, { checkIfRepoIsFav } from '../favorites/FavRepo.model';
import { RepoResource, OwnerResource } from './repos.types';

export const getRepos: RequestHandler = async (req, res) => {
  const owner: string = req.body.owner;

  try {
    const ownerGeneralInfo = await fetchOwnerAccount(owner);
    const ownerRepos = await fetchOwnerRepos(owner);

    const reposResource: RepoResource[] = reposPrepareResource(ownerRepos);
    const favRepos = await FavRepo.find();
    const reposResourceCheckedIfFav = checkIfRepoIsFav(reposResource, favRepos);

    const ownerResource: OwnerResource = ownerPrepareResource(
      ownerGeneralInfo,
      reposResourceCheckedIfFav
    );

    return res.json({
      msg: 'Repos successfully fetched',
      data: ownerResource,
    });
  } catch (error) {
    return res.status(404).json({ error: `Something went wrong` });
  }
};
