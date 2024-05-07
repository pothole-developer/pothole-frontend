import { fetchLogin } from '../services/login';
import { useQuery } from 'react-query';

interface LoginProps {
    id: string;
    password: string;
  }

export const useLoginQuery = (props:LoginProps) => {
  return useQuery(['result'], fetchLogin(props), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};