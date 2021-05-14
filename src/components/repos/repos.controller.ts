import { RequestHandler } from 'express';

export const addRepo: RequestHandler = async (req, res) => {
  res.send('Add repo');
};

export const getRepo: RequestHandler = async (req, res) => {
  res.send('Should check if repo is favorite');
};

export const deleteRepo: RequestHandler = async (req, res) => {
  res.send('Delete repo');
};

export const getRepos: RequestHandler = async (req, res) => {
  res.send('Return all repos');
};
