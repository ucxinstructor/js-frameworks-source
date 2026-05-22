import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("adds a new todo", async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("Enter todo...");
  const button = screen.getByText("Add");

  await user.type(input, "Learn testing");
  await user.click(button);

  expect(screen.getByText("Learn testing")).toBeInTheDocument();
});

test("toggles todo completion", async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText("Enter todo..."), "Task 1");
  await user.click(screen.getByText("Add"));

  const todo = screen.getByText("Task 1");

  await user.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText("Enter todo..."), "Task 2");
  await user.click(screen.getByText("Add"));

  await user.click(screen.getByText("Delete"));

  expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
});
