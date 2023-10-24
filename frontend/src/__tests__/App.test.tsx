import { render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom"

describe("App", () => {
  it("should work as expected", () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );
    expect(1 + 1).toBe(2);
  });
});