import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import AddButton from "./AddButton";
import { addTodo } from "../../utils/todoApi";
import Category from "./Category";

const StyledForm = styled.form`
  width: 100%;
  height: 100px;
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

export default function Form({ onTodoAdded }) {
  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    category: "",
    content: "",
  });

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (newTodo.category && newTodo.content) {
      await addTodo(newTodo);
      setNewTodo({
        id: uuidv4(),
        category: "",
        content: "",
      });
      onTodoAdded();
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
        <Category newTodo={newTodo} setNewTodo={setNewTodo} />
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
