export interface IRepoResource {
  id: string;
  name: string;
  fullName: string;
  cloneUrl: string;
  isFav: boolean;
  language: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOwnerResource {
  id: string;
  name: string;
  username: string;
  avatar: string;
  url: string;
  type: string;
  email: string;
  bio: string;
  reposNumber: number;
  repos: IRepoResource[];
  page: number;
  createdAt: string;
  updatedAt: string;
}
