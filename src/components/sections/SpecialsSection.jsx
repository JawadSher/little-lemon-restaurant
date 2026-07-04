import { specials } from "../../constants/siteData";

export default function SpecialsSection() {
  return (
    <section id="specials" className="section" aria-labelledby="specials-title">
      <div className="container section-heading">
        <h2 id="specials-title">This week's specials</h2>
        <p>Classic favorites and seasonal dishes prepared by our chefs each evening.</p>
      </div>
      <div className="container specials-grid">
        {specials.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="special-content">
              <div className="special-header">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
              <p>{item.description}</p>
              <button className="btn btn-link" type="button">
                Order delivery
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
