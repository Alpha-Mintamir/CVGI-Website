import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { join } from "path";
import styles from "../cohort.module.css";
import { PersonGrid, Person } from "@/components/PersonCard";

const validCohorts = ["2024", "2025"];

interface StudentsPageProps {
  params: Promise<{ cohort: string }>;
}

async function fetchStudents(cohort: string): Promise<Person[]> {
  try {
    const filePath = join(process.cwd(), "public", "data", cohort, "students.json");
    const fileContents = await readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export default async function StudentsPage({ params }: StudentsPageProps) {
  const { cohort } = await params;

  if (!validCohorts.includes(cohort)) {
    notFound();
  }

  const students = await fetchStudents(cohort);

  return (
    <div className={styles.page}>
      <section className={styles.section} style={{ paddingTop: "120px" }}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Students - Cohort {cohort}</h1>
        </div>
        {students.length > 0 ? (
          <PersonGrid
            people={students}
            imageBasePath={`/Avatars/${cohort}/Students`}
          />
        ) : (
          <p style={{ marginLeft: "70px", color: "#666" }}>
            No students data available yet.
          </p>
        )}
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return validCohorts.map((cohort) => ({
    cohort,
  }));
}

