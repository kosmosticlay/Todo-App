// json server에 새로운 할일 추가하기
const addTodo = async (newTodo) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${currentDate.getDate().toString().padStart(2, "0")}`;

  const todoWithTimestamp = {
    ...newTodo,
    timestamp: formattedDate,
  };

  try {
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoWithTimestamp),
    });
  } catch (error) {
    console.error("Error :", error);
  }
};

// json server에서 목록 가져오기
const getData = async (status) => {
  try {
    const response = await fetch(`http://localhost:3000/${status}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// json server에서 할일 제거하기
const deleteTodo = async (status, id) => {
  try {
    const response = await fetch(`http://localhost:3000/${status}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

export { addTodo, getData, deleteTodo };
