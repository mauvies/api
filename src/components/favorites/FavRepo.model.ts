import mongoose, { model, Document } from 'mongoose';

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

const FavRepoSchema = new mongoose.Schema<FavRepoInterface>(
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

export default model('FavRepo', FavRepoSchema);
