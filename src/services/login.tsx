import { unauthenticated } from './axiosInstance.ts';

interface LoginProps {
  email: string;
  password: string;
}

interface LoginResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  data: {
    memberId: number;
  };
}

export const fetchLogin = async (props: LoginProps) => {
  const { data } = await unauthenticated.post<LoginResponse>('/auth/manager/login', props);
  return data;
};
