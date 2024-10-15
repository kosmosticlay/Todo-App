import React from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

const StyledForm = styled.form`
  width: 100%;
  height: 100px;
  background-color: #35b6b6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 5px;
  select {
    width: 180px;
    padding: 0 10px;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const StyledInput = styled.input`
  min-width: 350px;
  width: 40%;
  padding: 0 10px;
  font-size: 1.1rem;
`;

const StyledBtn = styled.button`
  padding: 0 20px;
  cursor: pointer;
  font-size: 1.1rem;
`;

export default function Form() {
  return (
    <StyledForm>
      <p>카테고리를 선택 후, 할 일을 입력하세요!😊</p>
      <InputContainer>
        <AddButton aria-label="카테고리 추가 버튼" title="카테고리 추가">
          +
        </AddButton>
        <select>
          <option>카테고리 선택</option>
          <option>111</option>
          <option>222</option>
        </select>
        <StyledInput />
        <StyledBtn>입력</StyledBtn>
      </InputContainer>
    </StyledForm>
  );
}
