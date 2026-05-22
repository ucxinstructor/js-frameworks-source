import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
