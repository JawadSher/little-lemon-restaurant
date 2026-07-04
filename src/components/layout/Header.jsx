import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/booking", label: "Reservations" },
  { to: "/order-online", label: "Order Online" },
  { to: "/login", label: "Login" },
];

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Little Lemon home">
      <svg className="logo-mark" viewBox="0 0 48 48" role="img" aria-hidden="true">
        <circle cx="24" cy="24" r="20" />
        <path d="M24 11C17 11 11 16.5 11 24s6 13 13 13c8 0 12-5.8 12-13 0-1.5-.3-3-.8-4.3" />
      </svg>
      <span className="logo-text">
        <strong>Little Lemon</strong>
        <span>Chicago</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleHashNavigation = (path) => {
    if (path.startsWith("/#")) {
      navigate(path);
      requestAnimationFrame(() => {
        const element = document.querySelector(path.replace("/", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav ${isOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={() => handleHashNavigation(link.to)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
