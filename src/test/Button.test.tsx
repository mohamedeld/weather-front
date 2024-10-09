import { render, screen,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi,afterEach} from "vitest";
import Button from "../components/Button";

// Mock props
const mockHandleSearchBtn = vi.fn();

describe("Button component", () => {
  
  afterEach(()=>{
    cleanup();
  });
  it("renders the children text correctly", () => {
    render(<Button handleSearchBtn={mockHandleSearchBtn} disabled={false}>Search</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Search");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<Button handleSearchBtn={mockHandleSearchBtn} disabled={true}>Search</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  it("is not disabled when the disabled prop is false", () => {
    render(<Button handleSearchBtn={mockHandleSearchBtn} disabled={false}>Search</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toBeDisabled();
  });
});