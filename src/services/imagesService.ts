import axios, { AxiosResponse, AxiosError } from "axios";
import { config } from '../../src/config';

export const getImageByName = ( name: string ) => {
    const url = `${config.imagesApiUrl}key=${config.imagesApiKey}&q=${name}&limit=1`
    return axios.get(url)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((err: AxiosError) => {
      return err;
    });   
}