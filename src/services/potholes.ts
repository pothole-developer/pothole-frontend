import { AxiosResponse } from 'axios';
import { unauthenticated } from './axiosInstance.ts';

interface Pothole {
    lon: number;
    lat: number;
    pothole_id: number;
    progress: string;
}

export const fetchPotholes = async () => {
    const response : AxiosResponse<Pothole[]> = await unauthenticated.get('/potholes');
    return response;
};