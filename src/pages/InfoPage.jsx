import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function InfoPage({ title, description }) {
  useDocumentMeta(`${title} | Little Lemon`, description);

  return (
    <section className="section info-page" aria-labelledby="info-heading">
      <div className="container info-content">
        <h1 id="info-heading">{title}</h1>
        <p>{description}</p>
        <Link className="btn btn-primary" to="/booking">
          Reserve a table
        </Link>
      </div>
    </section>
  );
}
