import styled from 'styled-components';
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import DefaultButton from '../../components/DefaultButton';

const Question = styled.p`
  color: #555; 
  text-align: center;
  font-size: 16px;
`;

const ContainerQuestions = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const OptionButton = styled.button`
  background-color: #363F72;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin: 0.5em;

  &:hover { 
    background-color: #717BBC;
    transform: scale(1.05); 
  }

  &:active { 
    background-color: #717BBC;
    transform: scale(0.95);
  }
`;

const Score = styled.p`
  color: #333;
  text-align: center;
`;

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate()

  const questions = [
    {
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 3+3?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <FeatureContainer>
      <FeatureTitle text="Quiz App" />
      {currentQuestion < questions.length ? (
        <ContainerQuestions>
          <Question>{questions[currentQuestion].question}</Question>
          {questions[currentQuestion].options.map((option) => (
            <OptionButton key={option} onClick={() => handleAnswer(option)}>{option}</OptionButton>
          ))}
        </ContainerQuestions>
      ) : (
        <Score>Your score: {score}</Score>
      )}
      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default QuizApp;