import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
// import ProgramSection from "@/app/home-page/ProgramSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Image
              src="/image.png"
              alt="CVGRI Logo"
              width={120}
              height={120}
              className={styles.heroLogo}
            />
          </div>
          <h1 className={styles.heroTitle}>
            Computer Vision and<br />Graphics<br />Research Initiative
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering the next generation of CV & Graphics researchers
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About CVGRI</h2>
          <p className={styles.aboutText}>
            The Computer Vision and Graphics Research Initiative (CVGRI) is a collaborative 
            program designed to introduce students to cutting-edge research in computer vision, 
            graphics, and machine learning. Through mentorship from Cornell University researchers 
            and hands-on project experience, participants develop the skills and knowledge needed 
            to pursue advanced research careers.
          </p>
        </div>
      </section>

      {/* Cohort Selection Section */}
      <section className={styles.cohortSection}>
        <h2 className={styles.sectionTitle}>Select a Cohort</h2>
        <p className={styles.cohortDescription}>
          Choose a cohort to explore their research projects, meet the students and staff, 
          and learn about their journey.
        </p>
        <div className={styles.cohortGrid}>
          {/* Cohort 2024 Card */}
          <Link href="/2024" className={styles.cohortCard}>
            <div className={styles.cohortImageWrapper}>
              <Image
                src="/HeroImages/2024.jpg"
                alt="Cohort 2024"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cohortOverlay}></div>
            </div>
            <div className={styles.cohortInfo}>
              <span className={styles.cohortYear}>2024</span>
              <h3 className={styles.cohortTitle}>Cohort One</h3>
              <p className={styles.cohortMeta}>26 Students • 7 Research Projects</p>
              <span className={styles.cohortCta}>Explore Cohort →</span>
            </div>
          </Link>

          {/* Cohort 2025 Card */}
          <Link href="/2025" className={styles.cohortCard}>
            <div className={styles.cohortImageWrapper}>
              <Image
                src="/HeroImages/2025.jpg"
                alt="Cohort 2025"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.cohortOverlay}></div>
            </div>
            <div className={styles.cohortInfo}>
              <span className={styles.cohortYear}>2025</span>
              <h3 className={styles.cohortTitle}>Cohort Two</h3>
              <p className={styles.cohortMeta}>15 Students • 6 Research Projects</p>
              <span className={styles.cohortCta}>Explore Cohort →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>41+</span>
            <span className={styles.statLabel}>Students</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Cohorts</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>13</span>
            <span className={styles.statLabel}>Research Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Guest Speakers</span>
          </div>
        </div>
      </section>

      {/* Program Section */}
      {/* <section className={styles.programSection}>
        <ProgramSection />
      </section> */}

      <Footer />
    </div>
  );
}
