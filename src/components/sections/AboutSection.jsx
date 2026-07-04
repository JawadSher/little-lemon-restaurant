export default function AboutSection() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <article>
          <h2 id="about-title">A family-owned Chicago restaurant</h2>
          <p>
            Little Lemon started with two brothers, a small kitchen, and a passion for Mediterranean recipes
            passed through generations.
          </p>
          <p>
            Today we serve modern interpretations of timeless dishes using local produce, sustainable seafood,
            and house-made sauces inspired by traditional flavors.
          </p>
        </article>
        <figure className="about-image-grid">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="Little Lemon dining room"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
            alt="Chef plating a dish"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
