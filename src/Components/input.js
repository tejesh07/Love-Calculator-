import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f2d7ff; /* Light purple background */
  color: #663399; /* Purple text color */
`;

function Input({ label, value, onChange }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
}

export default Input;