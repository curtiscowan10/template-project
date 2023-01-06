import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders template project text", () => {
  render(<App />);
  const linkElement = screen.getByText("Template Project");
  expect(linkElement).toBeInTheDocument();
});
