export type RepoResource = {
  id: string;
  name: string;
  cloneUrl: string;
  isFav: boolean;
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
  createdAt: string;
  updatedAt: string;
};
