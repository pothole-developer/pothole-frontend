import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { useLoginQuery } from 'hooks/useLoginQuery';

const LoginForm = () => {
  const { mutate } = useLoginQuery();

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // validation check : 비어있는 값 확인
    if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    if (password === '') {
      alert('패스워드를 입력해주세요.');
      return;
    }

    mutate({ email, password });
  };

  return (
    <div>
      <S.LoginContainer>
        <S.LoginForm onSubmit={handleLogin}>
          <S.Label htmlFor="username">아이디</S.Label>
          <S.Input
            type="text"
            id="email"
            placeholder="아이디"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />

          <S.Label htmlFor="password">패스워드</S.Label>
          <S.Input
            type="password"
            id="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <S.Button type="submit">로그인</S.Button>
          <Link to="/signup">회원가입</Link>
        </S.LoginForm>
      </S.LoginContainer>
    </div>
  );
};

export default LoginForm;
