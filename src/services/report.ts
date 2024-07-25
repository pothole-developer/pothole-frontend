import { AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

export interface ReportRequest {
  startDate: string;
  endDate: string;
  period: 'auto' | 'monthly' | 'weekly' | 'daily';
}

interface ReportResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  data: any[];
}

export const fetchReport = async (request: ReportRequest) => {
  if (isInvalidDateFormat(request.startDate) || isInvalidDateFormat(request.endDate)) {
    console.log('Input 오류 - 형식 불일치 ');
    return null;
  }
  const response: AxiosResponse<ReportResponse> = await axiosInstance.get('/manager/pothole-report');
  return response.data;
};

const isInvalidDateFormat = (date: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return !regex.test(date);
} 
