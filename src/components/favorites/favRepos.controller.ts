import { RequestHandler } from 'express';

import { fetchRepo } from '../../services/api';
import FavRepo, { IFavRepo } from './FavRepo.model';

interface CreateFavRepo {
  repoId: IFavRepo['repoId'];
  owner: IFavRepo['owner'];
  name: IFavRepo['name'];
  description: IFavRepo['description'];
  language: IFavRepo['language'];
  cloneUrl: IFavRepo['cloneUrl'];
  repoCreatedAt: IFavRepo['repoCreatedAt'];
  repoUpdatedAt: IFavRepo['repoUpdatedAt'];
}

export const getFavRepos: RequestHandler = async (req, res) => {
  try {
    let favRepos: IFavRepo[] = await FavRepo.find();

    if (!favRepos)
      return res
        .status(404)
        .json({ error: 'Favorite repos could not be fetched' });

    if (!favRepos.length)
      return res.json({ msg: 'You do not have favorite repos yet' });

    favRepos = favRepos.sort((a: IFavRepo, b: IFavRepo) =>
      a.repoUpdatedAt > b.repoUpdatedAt ? -1 : 1
    );

    return res.json({
      status: 200,
      msg: 'Favorites repos fetched successfully',
      data: favRepos,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ error: 'Favorite repos could not be fetched' });
  }
};

export const addRepo: RequestHandler = async (req, res) => {
  try {
    const repoAlreadyExists: IFavRepo | null = await FavRepo.findOne({
      repoId: req.body.id,
    });

    if (repoAlreadyExists)
      return res.status(200).json({ msg: 'Repo is already in favorites' });

    // gets repo data from github api to prevent possible changes
    const repo = await fetchRepo(req.body.id);

    if (!repo)
      return res.status(404).json({ error: 'Repo does not exist on GitHub' });

    const repoFormatted: CreateFavRepo = {
      repoId: repo.id,
      owner: repo.owner.login,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      cloneUrl: repo.clone_url,
      repoCreatedAt: repo.created_at,
      repoUpdatedAt: repo.updated_at,
    };

    const repoAdded: IFavRepo = await FavRepo.create<CreateFavRepo>(
      repoFormatted
    );

    if (!repoAdded) {
      return res
        .status(404)
        .json({ error: 'Something went wrong and repo could not be added' });
    }

    return res.json({
      msg: 'Repo successfully added',
      status: 200,
      data: repoAdded,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ error: 'Server error, repo could not be added' });
  }
};

export const deleteRepo: RequestHandler = async (req, res) => {
  try {
    const repoDeleted: IFavRepo | null = await FavRepo.findOneAndDelete({
      repoId: req.params.id,
    });

    if (!repoDeleted)
      return res.status(404).json({ error: 'Repo not found in favorites' });

    return res.json({
      status: 200,
      msg: 'Repo has been successfully deleted',
      data: repoDeleted,
    });
  } catch (error) {
    return res
      .status(404)
      .json({ error: 'Server error, repo could not be added' });
  }
};
