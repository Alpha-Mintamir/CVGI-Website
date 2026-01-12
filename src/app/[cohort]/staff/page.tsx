import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { join } from "path";
import styles from "../cohort.module.css";
import { PersonGrid, Person } from "@/components/PersonCard";

const validCohorts = ["2024", "2025"];

interface StaffPageProps {
  params: Promise<{ cohort: string }>;
}

async function fetchData<T>(cohort: string, file: string): Promise<T[]> {
  try {
    const filePath = join(process.cwd(), "public", "data", cohort, file);
    const fileContents = await readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export default async function StaffPage({ params }: StaffPageProps) {
  const { cohort } = await params;

  if (!validCohorts.includes(cohort)) {
    notFound();
  }

  const [staff, tas, organizers] = await Promise.all([
    fetchData<Person>(cohort, "staff.json"),
    fetchData<Person>(cohort, "tas.json"),
    fetchData<Person>(cohort, "organizers.json"),
  ]);

  return (
    <div className={styles.page}>
      {/* Mentors Section */}
      {staff.length > 0 && (
        <section className={styles.section} style={{ paddingTop: "120px" }}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Mentors - Cohort {cohort}</h1>
          </div>
          <PersonGrid
            people={staff}
            imageBasePath={`/Avatars/${cohort}/Mentors`}
          />
        </section>
      )}

      {/* TAs & RAs Section */}
      {tas.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Teaching & Research Assistants</h1>
          </div>
          <PersonGrid
            people={tas}
            imageBasePath={`/Avatars/${cohort}/Mentors`}
          />
        </section>
      )}

      {/* Organizers Section - only show if there are organizers */}
      {organizers.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Organizers</h1>
          </div>
          <PersonGrid
            people={organizers}
            imageBasePath={`/Avatars/${cohort}/Mentors`}
          />
        </section>
      )}

      {staff.length === 0 && tas.length === 0 && organizers.length === 0 && (
        <section className={styles.section} style={{ paddingTop: "120px" }}>
          <p style={{ marginLeft: "70px", color: "#666" }}>
            No staff data available yet.
          </p>
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

