import { Link, useLocation } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function ConfirmedBookingPage() {
  const { state } = useLocation();
  const booking = state?.booking;

  useDocumentMeta(
    "Booking Confirmed | Little Lemon",
    "Your reservation at Little Lemon has been confirmed. Review your reservation details."
  );

  return (
    <section className="section confirmation" aria-labelledby="confirmed-heading">
      <div className="container confirmation-content">
        <div className="confirmation-icon" aria-hidden="true">
          ✓
        </div>
        <h1 id="confirmed-heading">Reservation confirmed</h1>
        <p>Thank you for choosing Little Lemon. We look forward to hosting you.</p>

        {booking ? (
          <dl className="confirmation-summary" aria-label="Reservation summary">
            <div>
              <dt>Name</dt>
              <dd>{booking.fullName}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{booking.date}</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>{booking.time}</dd>
            </div>
            <div>
              <dt>Guests</dt>
              <dd>{booking.guests}</dd>
            </div>
            <div>
              <dt>Seating</dt>
              <dd>{booking.seating}</dd>
            </div>
          </dl>
        ) : null}

        <div className="hero-actions">
          <Link to="/" className="btn btn-secondary">
            Back home
          </Link>
          <Link to="/booking" className="btn btn-primary">
            Book another table
          </Link>
        </div>
      </div>
    </section>
  );
}
