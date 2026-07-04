import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm, { validateBookingForm } from "../components/booking/BookingForm";

const setup = () => {
  const onSubmit = jest.fn().mockResolvedValue(true);
  const onDateChange = jest.fn();

  render(
    <BookingForm
      availableTimes={["18:00", "18:30"]}
      onDateChange={onDateChange}
      onSubmit={onSubmit}
      isSubmitting={false}
    />
  );

  return { onSubmit, onDateChange };
};

describe("BookingForm", () => {
  it("renders all required fields", () => {
    setup();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/reservation date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/reservation time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/special requests/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /confirm reservation/i })).toBeDisabled();
  });

  it("shows email validation error", async () => {
    setup();
    const user = userEvent.setup();
    const email = screen.getByLabelText(/email/i);

    await user.type(email, "invalid-email");
    await user.tab();

    expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
  });

  it("shows guest validation error", async () => {
    setup();
    const user = userEvent.setup();
    const guests = screen.getByLabelText(/number of guests/i);

    await user.clear(guests);
    await user.type(guests, "11");
    await user.tab();

    expect(screen.getByText(/guest count must be between 1 and 10/i)).toBeInTheDocument();
  });

  it("shows date cannot be in the past", () => {
    const errors = validateBookingForm({
      fullName: "Test User",
      email: "test@example.com",
      phone: "1234567890",
      date: "2000-01-01",
      time: "18:00",
      guests: "2",
      occasion: "Birthday",
      seating: "Indoor",
      requests: "",
      terms: true,
    });

    expect(errors.date).toMatch(/cannot be in the past/i);
  });

  it("submits when form is valid", async () => {
    const { onSubmit } = setup();
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/full name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/email/i), "ada@example.com");
    await user.type(screen.getByLabelText(/phone number/i), "3125555555");
    await user.selectOptions(screen.getByLabelText(/reservation time/i), "18:00");
    await user.clear(screen.getByLabelText(/number of guests/i));
    await user.type(screen.getByLabelText(/number of guests/i), "4");
    await user.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");
    await user.click(screen.getByLabelText(/indoor/i));
    await user.click(screen.getByLabelText(/i agree to the reservation terms/i));

    const submitButton = screen.getByRole("button", { name: /confirm reservation/i });
    expect(submitButton).toBeEnabled();
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
