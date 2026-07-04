import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/booking", label: "Reservations" },
  { to: "/#specials", label: "Menu Highlights" },
  { to: "/#about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2>Little Lemon</h2>
          <p>Fresh Mediterranean dining in the heart of Chicago.</p>
        </section>
        <section>
          <h2>Navigation</h2>
          <ul className="footer-list" aria-label="Footer navigation">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <address>
            1742 W Monroe St, Chicago, IL 60607
            <br />
            <a href="tel:+13125550123">+1 (312) 555-0123</a>
            <br />
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </address>
        </section>
        <section>
          <h2>Social</h2>
          <ul className="social-list" aria-label="Social media links">
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.x.com" target="_blank" rel="noreferrer">
                X
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
