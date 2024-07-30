import { useQuery } from 'react-query';
import { fetchDetailPothole, IPotholeDetail } from 'services/potholes';

export const usePotholeDetailQuery = (potholeId: number) => {
  return useQuery<IPotholeDetail>('potholeDetail', () => fetchDetailPothole(potholeId), {
    onSuccess: (data) => data,
    onError: () => alert('포트홀 상세조회에 실패했습니다'),
  });
};
