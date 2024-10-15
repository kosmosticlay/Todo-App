import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  height: max-content;
  margin: 10px 0;
  padding-bottom: 1cqmin;
  background-color: #383838;
  border-radius: 20px;
  border-top-left-radius: 0;
`;

const ItemHeader = styled.div`
  width: 150px;
  height: 25px;
  background-color: #9898ff;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Content = styled.p`
  padding: 20px;
  color: white;
`;

const ItemFooter = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const TimeStamp = styled.p``;

const Buttons = styled.div`
  display: flex;
  button {
    cursor: pointer;
  }
`;

export default function TodoItem({ category, content }) {
  return (
    <Item>
      <ItemHeader>{category}</ItemHeader>
      <Content>{content}</Content>
      <ItemFooter>
        <TimeStamp>2024.02.18</TimeStamp>
        <Buttons>
          <button title="수정">✏️</button>
          <button title="삭제">X</button>
        </Buttons>
      </ItemFooter>
    </Item>
  );
}
