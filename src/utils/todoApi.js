// json server에 새로운 할일 추가하기
const addTodo = async (newTodo) => {
  try {
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  } catch (error) {
    console.error("Error :", error);
  }
};

// json server에서 목록 가져오기
const getData = async (status) => {
  try {
    const response = await fetch(`http://localhost:3000/${status}`);
    const data = await response.json();
    return JSON.stringify(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export { addTodo, getData };
