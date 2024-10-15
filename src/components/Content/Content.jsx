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

export default function Content({ reload }) {
  return (
    <Wrapper>
      <TodoConatiner status="todo" reload={reload} />
      <TodoConatiner status="inProgress" reload={reload} />
      <TodoConatiner status="completed" reload={reload} />
    </Wrapper>
  );
}
