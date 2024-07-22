import { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';
import { IFilter } from 'hooks/usePotholesStore';

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

export const fetchPotholes = async (filter: IFilter) => {
  const response: AxiosResponse<IPotholesResponse> = await axiosInstance.get('/manager/potholes-filters', {
    params: filter,
  });

  return response.data;
};
