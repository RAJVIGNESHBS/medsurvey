import React from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <nav className="bg-green-700 p-4 text-white flex justify-between items-center">
      <div className="logo-title">
        <h2 className="text-2xl">RAJ & RAHUL Tech Solutions Ltd</h2>
      </div>
      <div className="flex space-x-3">
        <Button onClick={() => handleButtonClick("")}>ABOUT</Button>
        <Button onClick={() => handleButtonClick("")}>CALL CARE</Button>
        <Button onClick={() => handleButtonClick("")}>LOGOUT</Button>
      </div>
    </nav>
  );
};
