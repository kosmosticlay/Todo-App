export default function Category({ newTodo, setNewTodo }) {
  return (
    <select
      value={newTodo.category}
      onChange={(e) => setNewTodo({ ...newTodo, category: e.target.value })}
    >
      <option disabled value="">
        카테고리 선택
      </option>
      <option>🧑‍💻 PERSONAL</option>
      <option>🛠️ WORK</option>
      <option>🏃 SPORTS</option>
      <option>🚗 TRAVEL</option>
      <option>❤️ RELATIONSHIPS</option>
    </select>
  );
}
