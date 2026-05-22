import { bugConfig } from "./bugConfig";

export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li style={{ marginBottom: 8 }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: 10,
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() =>
          bugConfig.missingDeleteId
            ? onDelete()        // BUG ON
            : onDelete(todo.id) // FIX
        }
      >
        Delete
      </button>
    </li>
  );
}
