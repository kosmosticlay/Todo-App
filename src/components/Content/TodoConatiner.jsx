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
    } else {
      return;
    }

    const item = data.find((todo) => todo.id === id);

    await moveTodo(id, currentStatus, newStatus, item);
    onReload();
  };

  const handleRewind = async (id, currentStatus) => {
    let previousStatus;
    if (currentStatus === "completed") {
      previousStatus = "inProgress";
    } else if (currentStatus === "inProgress") {
      previousStatus = "todo";
    } else {
      return;
    }

    const item = data.find((todo) => todo.id === id);

    await moveTodo(id, currentStatus, previousStatus, item);
    onReload();
  };

  return (
    <Wrapper>
      <Status>
        {status === "todo" && "To do"}
        {status === "inProgress" && "In Progress"}
        {status === "completed" && "Completed"} ({data.length})
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
            onRewind={handleRewind}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}
