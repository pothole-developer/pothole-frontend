import { AxiosResponse } from 'axios';
import { unauthenticated } from './axiosInstance.ts';

interface Pothole {
    latitude: number;
    longitude: number;
}

export const fetchPotholes = async () => {
    const response : AxiosResponse<Pothole[]> = await unauthenticated.get('');
    return response;
};