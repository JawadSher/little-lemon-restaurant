import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App routing and navigation", () => {
  it("shows navigation links", async () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(await screen.findByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reservations/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /order online/i })).toBeInTheDocument();
  });

  it("shows 404 route", async () => {
    window.history.pushState({}, "", "/missing-page");
    render(<App />);

    expect(await screen.findByRole("heading", { name: /page not found/i })).toBeInTheDocument();
  });
});
