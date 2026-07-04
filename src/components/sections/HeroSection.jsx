import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" role="img" aria-label="A freshly prepared Mediterranean dining table" />
      <div className="container hero-content">
        <p className="hero-brand">Little Lemon</p>
        <h1 id="hero-title">Mediterranean dining crafted around fresh, seasonal ingredients.</h1>
        <p>
          Experience warm hospitality, elevated flavors, and thoughtfully prepared dishes in the center of
          Chicago.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/booking">
            Reserve a table
          </Link>
          <a className="btn btn-secondary" href="#specials">
            View specials
          </a>
        </div>
      </div>
    </section>
  );
}
