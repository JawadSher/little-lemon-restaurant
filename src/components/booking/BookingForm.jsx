import { useMemo, useState } from "react";
import { occasions } from "../../constants/siteData";

const todayISO = new Date().toISOString().split("T")[0];

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  date: todayISO,
  time: "",
  guests: "2",
  occasion: "",
  seating: "",
  requests: "",
  terms: false,
};

export const validateBookingForm = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s./0-9]*$/;
  const guests = Number(values.guests);

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!emailRegex.test(values.email)) errors.email = "Enter a valid email address.";

  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  else if (!phoneRegex.test(values.phone) || values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.date) errors.date = "Reservation date is required.";
  else if (values.date < todayISO) errors.date = "Date cannot be in the past.";

  if (!values.time) errors.time = "Reservation time is required.";
  if (!values.occasion) errors.occasion = "Select an occasion.";
  if (!values.seating) errors.seating = "Choose indoor or outdoor seating.";
  if (Number.isNaN(guests) || guests < 1 || guests > 10) {
    errors.guests = "Guest count must be between 1 and 10.";
  }
  if (!values.terms) errors.terms = "You must accept the terms to continue.";

  return errors;
};

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="field-error" role="alert">
      {message}
    </p>
  );
}

export default function BookingForm({ availableTimes, onDateChange, onSubmit, isSubmitting }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => validateBookingForm(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "date") {
      onDateChange(value);
      setValues((previous) => ({
        ...previous,
        date: value,
        time: "",
      }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((previous) => ({ ...previous, [name]: true }));
  };

  const showError = (name) => touched[name] || name === "terms";

  const submitForm = async (event) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      date: true,
      time: true,
      guests: true,
      occasion: true,
      seating: true,
      terms: true,
    });

    if (!hasErrors) {
      await onSubmit(values);
    }
  };

  return (
    <form className="booking-form" noValidate onSubmit={submitForm}>
      <div className="form-grid">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          required
        />
        <FieldError id="fullName-error" message={showError("fullName") ? errors.fullName : ""} />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        <FieldError id="email-error" message={showError("email") ? errors.email : ""} />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          required
        />
        <FieldError id="phone-error" message={showError("phone") ? errors.phone : ""} />

        <label htmlFor="date">Reservation Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          min={todayISO}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        <FieldError id="date-error" message={showError("date") ? errors.date : ""} />

        <label htmlFor="time">Reservation Time</label>
        <select
          id="time"
          name="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <FieldError id="time-error" message={showError("time") ? errors.time : ""} />

        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={values.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />
        <FieldError id="guests-error" message={showError("guests") ? errors.guests : ""} />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.occasion)}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          required
        >
          <option value="">Select an occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
        <FieldError id="occasion-error" message={showError("occasion") ? errors.occasion : ""} />

        <fieldset className="seating-fieldset">
          <legend>Indoor / Outdoor Seating</legend>
          <label>
            <input
              type="radio"
              name="seating"
              value="Indoor"
              checked={values.seating === "Indoor"}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            Indoor
          </label>
          <label>
            <input
              type="radio"
              name="seating"
              value="Outdoor"
              checked={values.seating === "Outdoor"}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            Outdoor
          </label>
          <FieldError id="seating-error" message={showError("seating") ? errors.seating : ""} />
        </fieldset>

        <label htmlFor="requests">Special Requests</label>
        <textarea
          id="requests"
          name="requests"
          rows="4"
          value={values.requests}
          onChange={handleChange}
          placeholder="Allergies, seating preferences, or celebration details"
        />

        <label className="terms-label" htmlFor="terms">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={values.terms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          I agree to the reservation terms and cancellation policy.
        </label>
        <FieldError id="terms-error" message={showError("terms") ? errors.terms : ""} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={hasErrors || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Confirm reservation"}
      </button>
    </form>
  );
}
