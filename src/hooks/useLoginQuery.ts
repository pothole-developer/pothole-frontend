import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/login';
import { useMutation } from 'react-query';

export const useLoginQuery = () => {
  const navigate = useNavigate();
  return useMutation(fetchLogin, {
    onSuccess: (data) => {
      localStorage.setItem('id', data.data.memberId.toString());
      console.log('로그인 성공');
      navigate('/main');
    },
    onError: () => {
      alert('아이디와 비밀번호를 확인해주세요');
    },
  });
};
