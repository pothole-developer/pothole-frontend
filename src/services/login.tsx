import { AxiosResponse } from 'axios';
import { unauthenticated } from './axiosInstance.ts';

interface Success {
    success: boolean;
    message: string;
}

interface LoginProps {
    id: string;
    password: string;
}

export const fetchLogin = async (props:LoginProps) => {
    const response : AxiosResponse<Success> = await unauthenticated.post('/login', props);
    return response;
};