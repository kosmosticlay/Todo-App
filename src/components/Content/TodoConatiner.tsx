import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100px;
  justify-content: space-between;
`;

const Status = styled.h2`
  width: 100%;
  padding: 10px 20px;
  background-color: #e6cbff;
  font-size: 1.1rem;
  font-weight: bold;
`;

const TodoList = styled.ul`
  background-color: white;
  height: max-content;
`;

export default function TodoConatiner({ status }) {
  return (
    <Wrapper>
      <Status>{status} ()</Status>
      <TodoList>
        <TodoItem category="personal" content="장보기"></TodoItem>
        <TodoItem category="work" content="일하기"></TodoItem>
      </TodoList>
    </Wrapper>
  );
}
