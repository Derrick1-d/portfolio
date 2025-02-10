import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
