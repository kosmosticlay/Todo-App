import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background-color: #35b6b6;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Afacad Flux", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 3rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Todo App</h1>
    </StyledHeader>
  );
}
