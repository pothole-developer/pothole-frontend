import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import * as S from './style';
import Cookies from 'js-cookie';
// import { useLoginQuery } from 'hooks/useLoginQuery';

interface LoginProps {
  id: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const from = location?.state?.redirectFrom?.pathname || '/main';

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('로그인 시도:', username, password);

    // validation check : 비어있는 값 확인
    if (username === "") {
      alert("아이디를 입력해주세요.");
      return;
    } else if (password === "") {
      alert("패스워드를 입력해주세요.");
      return;
    }

    // 여기에 로그인 처리 로직 추가
    // 로그인 api 호출
    const body:LoginProps = {
      id: username,
      password: password
    };

    // let data = useLoginQuery(body);

    if (username === "hi" && password === "hi") {
      // 성공 시 이전/메인 페이지 이동
      navigate(from);
      localStorage.setItem("id", username);
      
      // 쿠키 세팅
      Cookies.set("id", username);

    } else {
      alert("아이디 또는 패스워드를 확인해주세요.");
    }

    // 성공 시 main 페이지 이동
    // navigate('/');
    // 실패 시 alert
    // alert("아이디 또는 패스워드를 확인해주세요.");
  };

  return (
  <div>
    <S.LoginContainer>
      <S.LoginForm onSubmit={handleLogin}>
        <S.Label htmlFor="username">아이디</S.Label>
        <S.Input type="text" id="username" placeholder='아이디' value={username} onChange={(e) => setUsername(e.target.value)}/>

        <S.Label htmlFor="password">패스워드</S.Label>
        <S.Input type="password" id="password" placeholder='패스워드' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <S.Button type="submit">로그인</S.Button>
        <Link to="/signup">회원가입</Link>
      </S.LoginForm>
    </S.LoginContainer>
  </div>
  );
};

export default LoginForm;

function useEffect(arg0: () => void, arg1: History[]) {
  throw new Error('Function not implemented.');
}
