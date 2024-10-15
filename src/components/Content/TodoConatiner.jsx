import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { getData } from "../../utils/todoApi";

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
  background-color: white;
  height: max-content;
`;

export default function TodoConatiner({ status }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(status);
      if (!result) return;
      setData(JSON.parse(result));
      console.log(data);
    };

    fetchData();
  }, [data]);

  return (
    <Wrapper>
      <Status>
        {status} ({data.length})
      </Status>
      <TodoList>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            category={item.category}
            content={item.content}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}
