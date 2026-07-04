import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import BookingPage from "../pages/BookingPage";

describe("page rendering", () => {
  it("renders home page sections", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /mediterranean dining crafted/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /this week's specials/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /what our guests say/i })).toBeInTheDocument();
  });

  it("renders booking page", () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /reserve your table/i })).toBeInTheDocument();
  });

  it("renders confirmed booking page", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/confirmed",
            state: { booking: { fullName: "Test User", date: "2026-05-02", time: "18:00", guests: "2", seating: "Indoor" } },
          },
        ]}
      >
        <ConfirmedBookingPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /reservation confirmed/i })).toBeInTheDocument();
    expect(screen.getByText(/test user/i)).toBeInTheDocument();
  });

  it("renders not found page", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
