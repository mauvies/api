import { RequestHandler } from 'express';

export const getRepos: RequestHandler = async (req, res) => {
  res.status(200).json({ msg: 'List of all owner repos general info' });
};
