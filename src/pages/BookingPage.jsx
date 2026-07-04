import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/booking/BookingForm";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { submitAPI } from "../utils/api";
import { initializeTimes, updateTimes } from "../utils/booking";

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  useDocumentMeta(
    "Reserve a Table | Little Lemon",
    "Reserve your table at Little Lemon in Chicago. Select date, time, guests, and dining preferences."
  );

  const handleDateChange = (date) => {
    dispatch({ type: "dateChanged", date });
  };

  const handleSubmit = async (formValues) => {
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const success = await submitAPI(formValues);
      if (success) {
        navigate("/confirmed", { state: { booking: formValues } });
      } else {
        setSubmitError(
          "We were unable to complete your reservation. Please try again or call the restaurant directly."
        );
      }
    } catch (error) {
      setSubmitError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-page section" aria-labelledby="booking-heading">
      <div className="container booking-layout">
        <article>
          <h1 id="booking-heading">Reserve your table</h1>
          <p>
            Complete the form to reserve your preferred dining time. You will receive immediate confirmation
            after submission.
          </p>
          {submitError ? (
            <p className="submit-error" role="alert">
              {submitError}
            </p>
          ) : null}
        </article>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </section>
  );
}
