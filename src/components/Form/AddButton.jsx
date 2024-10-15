import styled from "styled-components";

const Button = styled.button`
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: aquamarine;
  font-size: 1.5rem;
`;

export default function AddButton({ children }) {
  return <Button>{children}</Button>;
}
