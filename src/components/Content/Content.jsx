import React from "react";
import styled from "styled-components";
import TodoConatiner from "./TodoConatiner";

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: #c0e9e7;
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export default function Content({ reload, onReload }) {
  return (
    <Wrapper>
      <TodoConatiner status="todo" reload={reload} onReload={onReload} />
      <TodoConatiner status="inProgress" reload={reload} onReload={onReload} />
      <TodoConatiner status="completed" reload={reload} onReload={onReload} />
    </Wrapper>
  );
}
