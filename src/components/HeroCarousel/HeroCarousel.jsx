import { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "./HeroCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Use public images but build final URLs using Vite base to avoid path issues
const rawSlides = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpg",
  "/images/banners/banner3.jpg",
  "/images/banners/banner4.jpg",
  "/images/banners/banner5.jpg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // prepend Vite base (works for dev and production with different bases)
  const slides = rawSlides.map((p) => {
    const base = import.meta.env.BASE_URL || "/";
    // ensure single slash between base and path
    return `${base.replace(/\/$/, "")}/${p.replace(/^\//, "")}`;
  });

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  const prevSlide = () => {
  console.log("prev clicked");
  setIndex((prev) => (prev - 1 + slides.length) % slides.length);
};
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="hero">

      {/* Slides */}
      {slides.map((img, i) => (
        <div
      key={i}
      className={`slide ${i===index?"active":""}`}
      style={{backgroundImage:`url(${img})`}}
    />
      ))}

      {/* Gradient fade bottom (Amazon effect) */}
      <div className="fade"></div>

      {/* Arrows */}
     <button className="arrow left" onClick={prevSlide}>
    <HiOutlineChevronLeft strokeWidth={1} /> 
  </button>

  <button className="arrow right" onClick={nextSlide}>
    <HiOutlineChevronRight strokeWidth={1} />
  </button>
    </div>
  );
}