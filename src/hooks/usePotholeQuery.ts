import { fetchAllPotholes } from 'services/potholes';
import { useQuery } from 'react-query';

export const usePotholeListQuery = () => {
  return useQuery(['potholeList'], fetchAllPotholes, {
    onSuccess: (data) => data,
    onError: () => {
      alert('포트홀 정보 불러오기에 실패했습니다');
    },
  });
};
