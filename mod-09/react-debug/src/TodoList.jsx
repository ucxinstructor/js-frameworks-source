import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onDelete,
  onToggle,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}