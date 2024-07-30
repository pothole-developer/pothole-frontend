import { axiosInstance } from './axiosInstance';
import { IFilter } from 'hooks/usePotholesStore';

export interface IPotholeInfo {
  potholeId: number;
  roadName: string;
  lat: number;
  lon: number;
  thumbnail: string;
  importance: number;
  progressStatus: string;
}

interface IPotholesResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  data: IPotholeInfo[];
}

interface PotholeHistoryImages {
  potholeHistoryImageId: number;
  potholeHistoryImageUrl: string;
  createdAt: string;
}

interface PotholeHistories {
  createdAt: string;
  potholeHistoryId: number;
  potholeHistoryImages: PotholeHistoryImages[];
  progressStatus: string;
}

export interface IPotholeDetail extends IPotholeInfo {
  dangerous: number;
  potholeHistories: PotholeHistories[];
}

interface IPotholeDetailResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  data: IPotholeDetail;
}

export const fetchPotholes = async (filter: IFilter) => {
  const response = await axiosInstance.get<IPotholesResponse>('/manager/potholes-filters', {
    params: filter,
  });

  return response.data;
};

export const fetchDetailPothole = async (potholeId: number) => {
  const response = await axiosInstance.get<IPotholeDetailResponse>(`/manager/${potholeId}`);

  return response.data.data;
};
