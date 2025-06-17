import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("renders hello world text", () => {
    render(<App />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
