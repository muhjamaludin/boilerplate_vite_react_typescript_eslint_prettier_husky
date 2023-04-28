import React from 'react';
import { useNavigate } from 'react-router-dom';

const Second = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>ABOUT PAGES</h3>
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

export default Second;
