export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li style={{ margin: "8px 0" }}>
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

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
