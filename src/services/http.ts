import axios, { AxiosResponse } from 'axios';
import config from '../config/default';

const instance = axios.create({
  baseURL: config.API_URL,
  timeout: 15000,
});

export const request = {
  get: async (url: string) => {
    try {
      const response: AxiosResponse = await instance.get(url);
      return response.data;
    } catch (error) {
      throw 'The API request failed';
    }
  },
};
