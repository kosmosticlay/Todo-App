import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { deleteTodo, getData, moveTodo } from "../../utils/todoApi";

const Wrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
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
  height: max-content;
`;

export default function TodoConatiner({ status, reload, onReload }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(status);
      if (!result) return;
      setData(JSON.parse(result));
    };

    fetchData();
  }, [status, reload]);

  console.log(data);

  const handleDelete = async (status, id) => {
    if (window.confirm("정말로 삭제하실건가요?")) {
      await deleteTodo(status, id);
      onReload();
    }
  };

  const handleMove = async (id, currentStatus) => {
    let newStatus;
    if (currentStatus === "todo") {
      newStatus = "inProgress";
    } else if (currentStatus === "inProgress") {
      newStatus = "completed";
    }

    const item = data.find((todo) => todo.id === id);

    await moveTodo(id, currentStatus, newStatus, item);
    onReload(); // 상태 변경 후 reload 상태를 변경하여 리렌더링 유도
  };
  return (
    <Wrapper>
      <Status>
        {status} ({data.length})
      </Status>
      <TodoList>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            status={status}
            category={item.category}
            content={item.content}
            timestamp={item.timestamp}
            onDelete={handleDelete}
            onMove={handleMove}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}
