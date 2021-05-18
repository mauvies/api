export type RepoResource = {
  id: string;
  name: string;
  fullName: string;
  cloneUrl: string;
  isFav: boolean;
  language: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OwnerResource = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  url: string;
  type: string;
  email: string;
  bio: string;
  reposNumber: number;
  repos: RepoResource[];
  page: number;
  createdAt: string;
  updatedAt: string;
};
