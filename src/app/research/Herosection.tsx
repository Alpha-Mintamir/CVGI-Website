"use client"; // For Next.js App Router
import React, { useState } from "react";
import Image from "next/image";
import styles from "./herosection.module.css";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/gallery1.JPG",
    "/gallery2.JPG",
    "/gallery3.JPG",
    "/gallery4.JPG",
    "/gallery5.JPG",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={images[currentIndex]}
          alt="Background"
          fill
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
        <a className={`${styles.prevButton}`} onClick={prevImage}>
          <i className="fa fa-angle-left"></i>
        </a>
        <a className={`${styles.nextButton}`} onClick={nextImage}>
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}
