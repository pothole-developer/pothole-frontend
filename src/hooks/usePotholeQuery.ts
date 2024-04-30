import { fetchPotholes } from '../services/potholes.ts';
import { useQuery } from 'react-query';

export const usePotholeListQuery = () => {
  return useQuery(['potholeList'], fetchPotholes, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};