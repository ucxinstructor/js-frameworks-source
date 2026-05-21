import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React state", done: false },
    { id: 2, text: "Practice map and filter", done: true }
  ]);

  const [input, setInput] = useState("");

  function addTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h2>Todo</h2>
      <h4>Collection Demo</h4>
      <h4>Count: {todos.length}</h4>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}