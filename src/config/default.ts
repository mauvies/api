import dotenv from 'dotenv';

dotenv.config();

export default {
  API_URL: process.env.API_URL || 'https://api.github.com',
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'repo-zoom',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
  MONGO_HOST:
    process.env.MONGO_HOST || process.env.NODE_ENV === 'dev'
      ? 'localhost'
      : 'mongodb',
  MONGO_PORT:
    process.env.MONGO_HOST || process.env.NODE_ENV === 'dev' ? 27017 : 27015,
  PORT: process.env.PORT || 5000,
};
