import { request } from '../services/http';

export const fetchOwnerAccount = (owner: string): Promise<any> =>
  request.get(`/users/${owner}`);

export const fetchOwnerRepos = (owner: string, page: number): Promise<any> =>
  request.get(`/users/${owner}/repos?page=${page}&sort=updated_at&order=desc`);

export const fetchRepo = (id: string): Promise<any> =>
  request.get(`/repositories/${id}`);
