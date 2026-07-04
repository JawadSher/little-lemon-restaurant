import { useEffect } from "react";

const DEFAULT_DESCRIPTION =
  "Little Lemon is a Mediterranean restaurant in Chicago with seasonal menus and online table booking.";

export default function useDocumentMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, [title, description]);
}
