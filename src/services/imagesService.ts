import axios, { AxiosResponse, AxiosError } from "axios";
import { config } from '../../src/config';

export const getImageByName = ( name: string ) => {
    const url = `${config.imagesApiUrl}${name}&per_page=1`
    return axios.get(url, {
        headers: {
          'Authorization': config.imagesApiKey
        }
      })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((err: AxiosError) => {
      return err;
    });   
}