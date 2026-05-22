import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { bugConfig } from "./bugConfig";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    if (bugConfig.duplicateTodos) {
      setTodos([...todos, newTodo, newTodo]); // BUG ON
    } else {
      setTodos([...todos, newTodo]); // FIX
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    if (bugConfig.mutateState) {
      const updated = todos.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed; // BUG ON
        }
        return t;
      });

      setTodos(updated);
    } else {
      setTodos(
        todos.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      );
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo Debug Demo</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}
