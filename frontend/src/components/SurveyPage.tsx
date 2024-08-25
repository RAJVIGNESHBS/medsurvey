import React, { useState } from 'react';
import './SurveyPage.css';

export const SurveyPage: React.FC = () => {
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  const handleOptionChange = (questionId: number, option: string) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/surveys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ responses })
      });
      if (response.ok) {
        alert('Survey submitted!');
      } else {
        alert('Error submitting survey');
      }
    } catch (error) {
      alert('Error submitting survey');
    }
  };

  return (
    <div className="survey-page">
      <h1 className="text-4xl text-center">SURVEY PAGE</h1>
      <p className="text-1xl text-center">Please fill the questionnaire for research and diagnosis purpose </p>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <h2 className="text-2xl ">{question.text}</h2>
            <div className="options">
              {question.options.length === 10 ? (
                <div className="scale-options">
                  {question.options.map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={`question${index}`}
                        value={option}
                        checked={responses[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ) : (
                question.options.map(option => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={option}
                      checked={responses[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                    />
                    {option}
                  </label>
                ))
              )}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

const questions = [
  { text: 'What is your age?', options: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65 or older'] },
  { text: 'What is your gender?', options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'] },
  { text: 'Are you experiencing any of the following symptoms? (e.g., Fever, Cough, Fatigue, Shortness of Breath)', options: ['Yes', 'No'] },
  { text: 'On a scale of 1 to 10, how would you rate your pain?', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
  { text: 'How long have you been experiencing these symptoms?', options: ['Less than a day', '1-3 days', '4-7 days', 'More than a week'] },
  { text: 'Did the symptoms start suddenly or gradually?', options: ['Suddenly', 'Gradually'] },
  { text: 'Do you have any of the following chronic conditions? (e.g., Diabetes, Hypertension, Asthma)', options: ['Yes', 'No'] },
  { text: 'Do you have any known allergies? If so, please specify.', options: ['Yes', 'No'] },
  { text: 'Are you currently taking any medications? If yes, please list them.', options: ['Yes', 'No'] },
  { text: 'Have you recently traveled to any areas with a high risk of disease?', options: ['Yes', 'No'] },
  { text: 'Have you been in close contact with anyone who has been diagnosed with a contagious disease recently?', options: ['Yes', 'No'] },
  { text: 'Do you smoke? If yes, how many cigarettes per day?', options: ['Yes', 'No'] },
  { text: 'Do you consume alcohol? If yes, how often?', options: ['Yes', 'No'] },
  { text: 'How frequently do you engage in physical exercise?', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
  { text: 'On a scale of 1 to 10, how stressed do you feel?', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] },
  { text: 'How would you describe your sleep quality over the past week?', options: ['Very Good', 'Good', 'Average', 'Poor', 'Very Poor'] },
];

export default SurveyPage;
