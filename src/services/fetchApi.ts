import axios, { AxiosResponse } from 'axios';

export const fetchOwnerAccount = async (owner: string) => {

  try {

    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/${owner}`
    );
    
    return response.data;

  } catch (error) {
    throw new Error(error);
  }

};
export const fetchOwnerRepos = async (owner: string) => {

  try {

    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/${owner}/repos`
    );

    return response.data;

  } catch (error) {
    throw new Error(error);
  }

};

export const fetchRepo = async (id: string) => {
  
  try {

    const response: AxiosResponse = await axios.get(
      `https://api.github.com/repositories/${id}`
    
      );
    
    return response.data;

  } catch (error) {
    throw new Error(error);
  }
  
};
