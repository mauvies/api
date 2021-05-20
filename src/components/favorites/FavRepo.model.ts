import mongoose, { model, Document, Schema } from 'mongoose';

import { IRepoResource } from '../repos/repos.interfaces';

export interface IFavRepo extends Document {
  repoId: string;
  owner: string;
  name: string;
  description: string;
  language: string;
  cloneUrl: string;
  repoCreatedAt: string;
  repoUpdatedAt: string;
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
    repoCreatedAt: {
      type: String,
    },
    repoUpdatedAt: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const checkIfRepoIsFav = (
  reposResource: IRepoResource[],
  favRepos: IFavRepo[]
): IRepoResource[] => {
  return reposResource.map((repoResource: IRepoResource): IRepoResource => {
    const isRepoFav = favRepos
      .map((favRepo: any) => favRepo.repoId)
      .includes(repoResource.id.toString());

    return { ...repoResource, isFav: !!isRepoFav };
  });
};

export default model<IFavRepo>('FavRepo', FavRepoSchema);
