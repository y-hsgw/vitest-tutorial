import { render, screen } from "@testing-library/react";
import { App } from "./App";

it("render button", () => {
  render(<App />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
