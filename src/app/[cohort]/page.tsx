import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./cohort.module.css";
import { PersonGrid, Person } from "@/components/PersonCard";
import { ResearchGrid, ResearchProject } from "@/components/ResearchCard";
import GallerySection from "@/app/home-page/GallerySection";

const validCohorts = ["2024", "2025"];

interface CohortPageProps {
  params: Promise<{ cohort: string }>;
}

async function fetchData<T>(cohort: string, file: string): Promise<T[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/${cohort}/${file}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function CohortPage({ params }: CohortPageProps) {
  const { cohort } = await params;

  if (!validCohorts.includes(cohort)) {
    notFound();
  }

  // Fetch all data for the cohort
  const [students, staff, tas, organizers, guests, research, galleryImages] = await Promise.all([
    fetchData<Person>(cohort, "students.json"),
    fetchData<Person>(cohort, "staff.json"),
    fetchData<Person>(cohort, "tas.json"),
    fetchData<Person>(cohort, "organizers.json"),
    fetchData<Person>(cohort, "guests.json"),
    fetchData<ResearchProject>(cohort, "research.json"),
    fetchData<string>(cohort, "gallery.json"),
  ]);

  // Dynamic hero image based on cohort
  const heroImage = `/HeroImages/${cohort}.jpg`;

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section 
        className={styles.hero}
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Computer Vision and<br />Graphics<br />Research Initiative
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering the next generation of CV & Graphics researchers
          </p>
          <span className={styles.cohortBadge}>Cohort {cohort}</span>
        </div>
      </section>

      {/* Guest Speakers Section */}
      {guests.length > 0 && (
        <section id="guests" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Guest Speakers</h1>
          </div>
          <PersonGrid
            people={guests}
            imageBasePath={`/Avatars/${cohort}/GuestSpeakers`}
          />
        </section>
      )}

      {/* Research Projects Section */}
      {research.length > 0 && (
        <section id="research" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Research Projects</h1>
            <Link href={`/${cohort}/research`} className={styles.viewAllBtn}>
              View All Researches
            </Link>
          </div>
          <ResearchGrid projects={research} cohort={cohort} />
        </section>
      )}

      {/* Students Section */}
      {students.length > 0 && (
        <section id="students" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Students</h1>
            <Link href={`/${cohort}/students`} className={styles.viewAllBtn}>
              View All Students
            </Link>
          </div>
          <PersonGrid
            people={students.slice(0, 10)}
            imageBasePath={`/Avatars/${cohort}/Students`}
          />
        </section>
      )}

      {/* Staff Section */}
      {staff.length > 0 && (
        <section id="staff" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Staff</h1>
          </div>
          <PersonGrid
            people={staff}
            imageBasePath={`/Avatars/${cohort}/Mentors`}
          />
        </section>
      )}

      {/* TAs Section */}
      {tas.length > 0 && (
        <section id="tas" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Teaching Assistants</h1>
          </div>
          <PersonGrid
            people={tas}
            imageBasePath={`/Avatars/${cohort}/Mentors`}
          />
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section id="gallery" className={styles.section}>
          <h1 className={styles.galleryTitle}>Gallery</h1>
          <GallerySection images={galleryImages} />
        </section>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return validCohorts.map((cohort) => ({
    cohort,
  }));
}

