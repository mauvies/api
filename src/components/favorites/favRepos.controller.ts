import { RequestHandler } from 'express';

export const getFavRepos: RequestHandler = async (req, res) => {
  return res.json({ msg: 'Favorite repos list' });
};

export const addRepo: RequestHandler = async (req, res) => {
  return res.json({
    msg: 'Repo successfully added',
  });
};

export const deleteRepo: RequestHandler = async (req, res) => {
  return res.json({
    msg: 'Repo has been deleted',
  });
};
