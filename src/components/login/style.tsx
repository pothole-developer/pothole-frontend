import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;