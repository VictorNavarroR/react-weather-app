import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ForeCast } from '../models/foreCast.interface';

const useFetch = (url: string) => {
    const [data, setData] = useState<ForeCast>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({} as AxiosError);

    useEffect(() => {
        setLoading(true);
        axios
          .get(url)
          .then((response: AxiosResponse) => {
             setData(response.data);
          })
          .catch((err: AxiosError) => {
            setError(err);
          })
          .finally( () => {
            setLoading(false);
          })
    }, [url]);
    
    return { data, loading, error }
}

export default useFetch;