import { RequestHandler } from 'express';

import { fetchRepo } from '../../services/fetchApi';
import FavRepo, { FavRepoInterface } from './FavRepo.model';

interface CreateFavRepo {
  repoId: FavRepoInterface['repoId'];
  owner: FavRepoInterface['owner'];
  name: FavRepoInterface['name'];
  description: FavRepoInterface['description'];
  language: FavRepoInterface['language'];
  cloneUrl: FavRepoInterface['cloneUrl'];
  createdAt: FavRepoInterface['createdAt'];
  updatedAt: FavRepoInterface['updatedAt'];
}

export const getFavRepos: RequestHandler = async (req, res) => {
  try {
    const favRepos: FavRepoInterface[] = await FavRepo.find();

    if (!favRepos)
      return res
        .status(404)
        .json({ error: 'Favorite repos could not be fetched' });

    if (!favRepos.length)
      return res.json({ msg: 'You do not have favorite repos yet' });

    return res.json({
      msg: 'Favorites repos fetched successfully',
      data: favRepos,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const addRepo: RequestHandler = async (req, res) => {
  try {
    const repoAlreadyExists: FavRepoInterface | null = await FavRepo.findOne({
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
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
    };

    const repoAdded: FavRepoInterface = await FavRepo.create<CreateFavRepo>(
      repoFormatted
    );

    if (!repoAdded) {
      return res
        .status(500)
        .json({ error: 'Something went wrong and repo could not be added' });
    }

    return res.json({
      msg: 'Repo successfully added',
      status: 200,
      data: repoAdded,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteRepo: RequestHandler = async (req, res) => {
  try {
    const repoDeleted: FavRepoInterface | null = await FavRepo.findOneAndDelete(
      {
        repoId: req.params.id,
      }
    );

    if (!repoDeleted)
      return res.status(404).json({ error: 'Repo not found in favorites' });

    return res.json({
      status: 200,
      msg: 'Repo has been successfully deleted',
      data: repoDeleted,
    });
  } catch (error) {
    throw new Error(error);
  }
};
