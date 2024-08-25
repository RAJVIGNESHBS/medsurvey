import React from 'react';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string; /* Added for additional classes */
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-5 rounded`}>
      {children}
    </button>
  );
};
