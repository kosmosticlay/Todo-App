import { useState } from "react";
import styled from "styled-components";
import Category from "../Form/Category";
import { moveTodo, updateTodo } from "../../utils/todoApi";

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
  background-color: ${(props) => {
    switch (props.category) {
      case "🧑‍💻 PERSONAL":
        return "#ffadad";
      case "🛠️ WORK":
        return "#ffd6a5";
      case "🏃 SPORTS":
        return "#fdffb6";
      case "🚗 TRAVEL":
        return "#caffbf";
      case "❤️ RELATIONSHIPS":
        return "#9bf6ff";
      default:
        return "#9898ff";
    }
  }};
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
  onMove,
  onRewind,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newCategory, setNewCategory] = useState(category);
  const [newContent, setNewContent] = useState(content);

  const handleRewind = () => {
    onRewind(id, status);
  };

  const handleMove = () => {
    if (!isEditing) {
      onMove(id, status);
    }
  };

  const handleDelete = () => {
    onDelete(status, id);
  };

  const handleEdit = async () => {
    console.log(isEditing, "hey");
    if (isEditing) {
      const updatedData = {
        category: newCategory,
        content: newContent,
        timestamp,
      };

      await updateTodo(status, id, updatedData);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <Item>
      <ItemHeader category={newCategory}>
        {isEditing ? (
          <Category
            newTodo={{ category: newCategory }}
            setNewTodo={(updated) => setNewCategory(updated.category)}
          />
        ) : (
          newCategory
        )}
      </ItemHeader>
      <Content onClick={handleMove}>
        {isEditing ? (
          <>
            <input
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <button onClick={handleEdit}>수정</button>
          </>
        ) : (
          newContent
        )}
      </Content>
      <ItemFooter>
        <TimeStamp>📆{timestamp}</TimeStamp>
        <Buttons>
          <button title="이전 단계로 돌아가기" onClick={handleRewind}>
            <svg
              fill="#757575"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z" />
            </svg>
          </button>
          <button title="수정" onClick={() => setIsEditing(true)}>
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
