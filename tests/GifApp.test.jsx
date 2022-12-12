import { fireEvent, render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

describe("GifApp test", () => {
  it("vs snapshot", () => {
    const { container } = render(<GifApp />);
    expect(container).toMatchSnapshot();
  });
  it("should show tittle app", () => {
    render(<GifApp />);
    expect(screen.getByText("GifApp")).toBeTruthy();
  });
  it("should change input, reset input with submit and show category tittle", () => {
    render(<GifApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "Marvel" } });
    expect(input.value).toBe("Marvel");
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(screen.getByText("Marvel")).toBeTruthy();
  });
});
