import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import SpecialsSection from "../components/sections/SpecialsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function HomePage() {
  const { hash } = useLocation();

  useDocumentMeta(
    "Little Lemon | Mediterranean Restaurant in Chicago",
    "Little Lemon offers elegant Mediterranean dining in Chicago with seasonal specials and online reservations."
  );

  useEffect(() => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}
