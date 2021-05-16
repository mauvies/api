import mongoose, { model, Document, Schema } from 'mongoose';

import { RepoResource } from '../repos/repos.types';

export interface FavRepoInterface extends Document {
  repoId: string;
  owner: string;
  name: string;
  description: string;
  language: string;
  cloneUrl: string;
  createdAt: string;
  updatedAt: string;
}

const FavRepoSchema: Schema = new mongoose.Schema(
  {
    repoId: {
      type: String,
      unique: true,
    },
    owner: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    cloneUrl: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const checkIfRepoIsFav = (
  reposResource: RepoResource[],
  favRepos: FavRepoInterface[]
): RepoResource[] => {

  return reposResource.map((repo: RepoResource): RepoResource => {

    const isRepoFav = favRepos
      .map((repo: any) => repo.repoId)
      .includes(repo.id.toString());

    return { ...repo, isFav: !!isRepoFav };

  });

};

export default model<FavRepoInterface>('FavRepo', FavRepoSchema);
