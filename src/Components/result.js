import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ResultText = styled.p`
  font-size: 24px;
  font-family: 'Roboto Mono';
  color: #663399; /* Purple result text color */
`;

function Result({ result }) {
  return (
    <ResultContainer>
      <ResultText>{result !== null && `Love Percentage: ${result}%`}</ResultText>
      {/* Add a message based on the percentage here */}
    </ResultContainer>
  );
}

export default Result;