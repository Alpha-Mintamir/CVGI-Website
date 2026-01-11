import Image from "next/image";
import styles from "./herosection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/Research Project Images/home.png"
          alt="Background"
          fill
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.heroContent}>
        <p className={styles.heroTitle}>Computer Vision and Graphics</p>
        <p className={styles.heroTitle}>Research Initiative</p>
      </div>
    </div>
  );
}
