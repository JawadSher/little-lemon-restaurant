import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("404 | Little Lemon", "The page you requested could not be found.");

  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="container">
        <p className="error-code">404</p>
        <h1 id="not-found-title">Page not found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <Link className="btn btn-primary" to="/">
          Return to home
        </Link>
      </div>
    </section>
  );
}
