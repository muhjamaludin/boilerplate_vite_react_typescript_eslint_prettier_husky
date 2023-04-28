import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Not Found</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go Home
      </button>
    </>
  );
};

export default NotFound;
