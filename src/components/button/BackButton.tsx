import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './style';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/main');
  };

  return <Button onClick={handleBackClick}>Back</Button>;
};