import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import 'typeface-roboto-mono';





const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  
  color: #663399; /* Purple label color */
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e6dfdc; /* Light purple background */
  color: #663399; /* Purple text color */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff69b4; /* Pink button color */
  color: solid white;
  border: 5px;
  border-radius: 7px;
  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Roboto Mono';
  color: #663399; /* Purple result text color */
`;



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px; /* Adjust padding as needed */
  background-size: cover;
  background-color: pink;
  backgroud-image: url('')
  background-position: center;
  background-attachment: fixed;
  animation: shimmer 2s infinite linear;

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`;
const InputContainer = styled.div`
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);   

    }
  }
`;
function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    // Check if either name is "Teja" (case-insensitive)
    if (name1.toLowerCase() === 'teja' || name2.toLowerCase() === 'teja') {
      setResult(100);
    } else {
      const randomPercentage = Math.floor(Math.random() * 101);
      setResult(randomPercentage);
    }
  };
  

  return (
    <AppContainer>
      <InputContainer>
        <Label>Name 1</Label>
        <InputField type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
      </InputContainer>
      <InputContainer>
        <Label>Name 2</Label>
        <InputField type="text" value={name2} onChange={(e) => setName2(e.target.value)} />
      </InputContainer>
      <Button onClick={calculateLove}>
        <FaHeart /> ask T! <FaHeart />
      </Button>
      <ResultContainer>
        <ResultText>{result !== null && `Love Percentage: ${result}%`}</ResultText>
      </ResultContainer>
      <div style={{ position: 'relative' }}>
        {/* Create multiple Heart components to fill the background */}
        
        <FaHeart />
        <FaHeart />
        <FaHeart />
        <FaHeart />
        <FaHeart />
        <FaHeart />
        <FaHeart />
        {/* ... more Heart components */}
      </div>
    </AppContainer>
  );

}

export default App;