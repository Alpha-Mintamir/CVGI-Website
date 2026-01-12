import { notFound } from "next/navigation";
import styles from "../cohort.module.css";
import { ResearchGrid, ResearchProject } from "@/components/ResearchCard";

const validCohorts = ["2024", "2025"];

interface ResearchPageProps {
  params: Promise<{ cohort: string }>;
}

async function fetchResearch(cohort: string): Promise<ResearchProject[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/${cohort}/research.json`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { cohort } = await params;

  if (!validCohorts.includes(cohort)) {
    notFound();
  }

  const research = await fetchResearch(cohort);

  return (
    <div className={styles.page}>
      <section className={styles.section} style={{ paddingTop: "120px" }}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Research Projects - Cohort {cohort}</h1>
        </div>
        {research.length > 0 ? (
          <ResearchGrid projects={research} cohort={cohort} />
        ) : (
          <p style={{ marginLeft: "70px", color: "#666" }}>
            No research projects available yet.
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

