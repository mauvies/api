import axios, { AxiosResponse } from 'axios';
import config from '../config/default'

export const fetchOwnerAccount = async (owner: string) => {

  try {

    const response: AxiosResponse = await axios.get(
      `${config.API_URL}/users/${owner}`
    );
    
    return response.data;

  } catch (error) {
    throw new Error(error);
  }

};
export const fetchOwnerRepos = async (owner: string) => {

  try {

    const response: AxiosResponse = await axios.get(
      `${config.API_URL}/users/${owner}/repos`
    );

    return response.data;

  } catch (error) {
    throw new Error(error);
  }

};

export const fetchRepo = async (id: string) => {
  
  try {

    const response: AxiosResponse = await axios.get(
      `${config.API_URL}/repositories/${id}`
    
      );
    
    return response.data;

  } catch (error) {
    throw new Error(error);
  }
  
};
