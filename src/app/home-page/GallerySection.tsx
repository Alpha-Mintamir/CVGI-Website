"use client"; // For Next.js App Router
import React, { useState } from "react";
import styles from "./gallery.module.css"; // Importing local CSS file
import { getAssetPath } from "@/lib/basePath";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images: rawImages }) => {
  // Apply basePath to all images
  const images = rawImages.map(img => getAssetPath(img));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImages = () => {
    if (currentIndex + 2 < images.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const prevImages = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex + 1 < images.length) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex - 1 >= 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {currentIndex > 0 && (
          <div
            className={
              `${styles.prevNextImage} ${styles.leftImage}` +
              (currentIndex + 2 >= images.length
                ? ` ${styles.enlargedPrev}`
                : "")
            }
          >
            <img src={images[currentIndex - 1]} alt="Previous" />
          </div>
        )}

        <div className={styles.imageWrapper}>
          {images.slice(currentIndex, currentIndex + 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className={styles.image}
              onClick={() => openModal(currentIndex + index)}
            />
          ))}
        </div>

        {currentIndex + 2 < images.length && (
          <div className={`${styles.prevNextImage} ${styles.rightImage}`}>
            <img src={images[currentIndex + 2]} alt="Next" />
          </div>
        )}
      </div>

      {currentIndex > 0 && (
        <a
          className={`${styles.navButton} ${styles.leftNav}`}
          onClick={prevImages}
        >
          <i className="fa fa-angle-left"></i>
        </a>
      )}
      {currentIndex + 2 < images.length && (
        <a
          className={`${styles.navButton} ${styles.rightNav}`}
          onClick={nextImages}
        >
          <i className="fa fa-angle-right"></i>
        </a>
      )}

      {isModalOpen && selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <a className={styles.closeButton} onClick={closeModal}>
              <i className="fa fa-close"></i>
            </a>

            {selectedIndex > 0 && (
              <a
                className={`${styles.navButton} ${styles.leftNav}`}
                onClick={prevModalImage}
              >
                <i className="fa fa-angle-left"></i>
              </a>
            )}

            <img
              src={images[selectedIndex]}
              alt="Full view"
              className={styles.modalImage}
            />

            {selectedIndex + 1 < images.length && (
              <a
                className={`${styles.navButton} ${styles.rightNav}`}
                onClick={nextModalImage}
              >
                <i className="fa fa-angle-right"></i>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
