
import React from 'react';

export const ExistingCourses: React.FC = () => {
  const handleStartChat = () => {
    window.location.href = '/chatbot';
  };

  return (
    <div className="chatbot">
      <h1 className="text-3xl text-center">CHAT BOT</h1>
      <p className="text-bg text-center p-3">Chat with our AI Assistant</p>
      <button className="chatbot-button" onClick={handleStartChat}>
        Start Chat
      </button>
    </div>
  );
};
