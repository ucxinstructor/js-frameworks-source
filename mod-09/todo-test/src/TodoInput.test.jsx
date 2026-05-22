import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "./TodoInput";

test("clears input after submit", async () => {
  const mockAdd = vi.fn(); // use jest.fn() if Jest

  render(<TodoInput onAdd={mockAdd} />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText("Enter todo...");

  await user.type(input, "Hello");
  await user.click(screen.getByText("Add"));

  expect(input.value).toBe("");
});
