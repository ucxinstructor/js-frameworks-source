import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import Counter from "./Counter";

test(
  "increments counter",
  () => {
    render(<Counter />);

    fireEvent.click(
      screen.getByText(
        "Increment"
      )
    );

    expect(
      screen.getByText("1")
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByText(
        "Increment"
      )
    );

    expect(
      screen.getByText("2")
    ).toBeInTheDocument();

  }
);
