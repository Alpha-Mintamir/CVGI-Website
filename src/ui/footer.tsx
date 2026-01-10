"use client";

import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Section - Logo and CVGRI */}
      <div className={styles.left}>
        <Image src="/favicon.ico" alt="CVGRI Logo" width={60} height={50} />
        <span className={styles.logoText}>CVGRI</span>
      </div>

      {/* Center Section - Middle Text */}
      <div className={styles.center}>
        <p>Made by CVGRI Team</p>
        <p className={styles.year}>2025</p>
      </div>
    </footer>
  );
}
