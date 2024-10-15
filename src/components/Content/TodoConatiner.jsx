import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { deleteTodo, getData } from "../../utils/todoApi";

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

export default function TodoConatiner({ status, reload }) {
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
      const updatedData = await getData(status);
      setData(JSON.parse(updatedData));
    }
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
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}
