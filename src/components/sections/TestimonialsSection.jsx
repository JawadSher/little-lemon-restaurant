import { testimonials } from "../../constants/siteData";

function Stars({ rating }) {
  return (
    <p className="stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </p>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container section-heading">
        <h2 id="testimonials-title">What our guests say</h2>
        <p>Trusted by Chicago locals for family dinners, celebrations, and business nights.</p>
      </div>
      <div className="container testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <Stars rating={testimonial.rating} />
            <div className="reviewer">
              <img src={testimonial.avatar} alt={`${testimonial.name} portrait`} loading="lazy" />
              <h3>{testimonial.name}</h3>
            </div>
            <p>{testimonial.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
