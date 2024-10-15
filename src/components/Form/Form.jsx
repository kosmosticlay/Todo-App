import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./AddButton";
import { addTodo } from "../../utils/todoApi";

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
    width: 200px;
    padding: 0 10px;
    cursor: pointer;
    font-size: 1.1rem;
  }
`;

const StyledInput = styled.input`
  min-width: 300px;
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
  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    category: "",
    content: "",
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.category && newTodo.content) {
      addTodo(newTodo);
      setNewTodo({
        id: uuidv4(),
        category: "",
        content: "",
      });
    } else {
      alert("카테고리와 내용을 모두 입력하세요.");
    }
  };

  return (
    <StyledForm onSubmit={handleAddTodo}>
      <p>카테고리를 선택 후, 할 일을 입력하세요!😊</p>
      <InputContainer>
        <AddButton aria-label="카테고리 추가 버튼" title="카테고리 추가">
          +
        </AddButton>
        <select
          value={newTodo.category}
          onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
        >
          <option disabled value="">
            카테고리 선택
          </option>
          <option>🧑‍💻 PERSONAL</option>
          <option>🛠️ WORK</option>
          <option>🏃 SPORTS</option>
          <option>🚗 TRAVEL</option>
          <option>❤️ RELATIONSHIPS</option>
        </select>
        <StyledInput
          value={newTodo.content}
          onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
          type="text"
        />
        <StyledBtn type="submit">입력</StyledBtn>
      </InputContainer>
    </StyledForm>
  );
}
