import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Page1: React.FC = () => {
  const navigate = useNavigate();

  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={goto('/')}>Page Home</button>
      <button onClick={goto('/page2')}>Page 2</button>
    </div>
  );
};
