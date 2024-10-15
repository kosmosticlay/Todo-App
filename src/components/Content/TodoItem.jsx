import styled from "styled-components";

const Item = styled.li`
  height: max-content;
  margin: 10px 0;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 20px;
  border-top-left-radius: 0;
  box-shadow: 3px 3px 0px 1px black;
`;

const ItemHeader = styled.div`
  width: max-content;
  height: 25px;
  background-color: #9898ff;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const Content = styled.p`
  padding: 20px;
  color: black;
  cursor: pointer;
`;

const ItemFooter = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
`;

const TimeStamp = styled.p`
  color: #757575;
  font-size: 0.9rem;
`;

const Buttons = styled.div`
  display: flex;
  button {
    all: unset;
    cursor: pointer;
    svg {
      margin: 0 3px;
      &:hover {
        fill: red;
      }
    }
  }
`;

export default function TodoItem({
  id,
  status,
  category,
  content,
  timestamp,
  onDelete,
}) {
  const handleDelete = () => {
    onDelete(status, id);
  };

  return (
    <Item>
      <ItemHeader>{category}</ItemHeader>
      <Content>{content}</Content>
      <ItemFooter>
        <TimeStamp>📆{timestamp}</TimeStamp>
        <Buttons>
          <button title="수정">
            <svg
              fill="#757575"
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
            </svg>
          </button>
          <button title="삭제" onClick={handleDelete}>
            <svg
              fill="#757575"
              width="12px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </button>
        </Buttons>
      </ItemFooter>
    </Item>
  );
}
