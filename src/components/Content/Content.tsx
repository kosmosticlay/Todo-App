import React from "react";
import styled from "styled-components";
import TodoConatiner from "./TodoConatiner";

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: antiquewhite;
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export default function Content() {
  return (
    <Wrapper>
      <TodoConatiner status="Todo" />
      <TodoConatiner status="In progress" />
      <TodoConatiner status="Completed" />
    </Wrapper>
  );
}
