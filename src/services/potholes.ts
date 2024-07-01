import { AxiosResponse } from 'axios';
import { unauthenticated } from './axiosInstance';

export interface IPotholeInfo {
  potholeId: number;
  roadName: string;
  lat: number;
  lon: number;
  thumbnail: string;
  importance: number;
  processStatus: string;
}

interface IPotholesResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  data: IPotholeInfo[];
}

export const fetchAllPotholes = async () => {
  const response: AxiosResponse<IPotholesResponse> = await unauthenticated.get('/manager/potholes');
  return response.data;
};
