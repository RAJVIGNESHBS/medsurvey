// app.tsx
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewCourses } from './components/NewCourses';
import { ExistingCourses } from './components/ExistingCourses';
import { SurveyPage } from './components/SurveyPage';
import { ChatbotPage } from './components/ChatbotPage'; 
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isSurveyPage = location.pathname === '/survey';
  const isChatbotPage = location.pathname === '/chatbot';

  return (
    <>
      {!isSurveyPage && !isChatbotPage && <Navbar />}
      {!isSurveyPage && !isChatbotPage && <Hero />}
      <div className="partition">
        {!isSurveyPage && !isChatbotPage && <NewCourses />}
        {!isSurveyPage && !isChatbotPage && <ExistingCourses />}
      </div>
      <Routes>
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </>
  );
}
export default App;
