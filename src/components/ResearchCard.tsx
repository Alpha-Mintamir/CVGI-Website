"use client";

import Link from "next/link";
import styles from "./ResearchCard.module.css";

export interface ResearchProject {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

interface ResearchCardProps {
  project: ResearchProject;
  cohort: string;
}

export function ResearchCard({ project, cohort }: ResearchCardProps) {
  return (
    <Link
      href={`/${cohort}/research/${project.slug}`}
      className={styles.posterCard}
    >
      <div className={styles.posterImageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.posterImage}
        />
      </div>
      <h3 className={styles.posterTitle}>{project.title}</h3>
    </Link>
  );
}

interface ResearchGridProps {
  projects: ResearchProject[];
  cohort: string;
}

export function ResearchGrid({ projects, cohort }: ResearchGridProps) {
  return (
    <div className={styles.galleryGrid}>
      {projects.map((project) => (
        <ResearchCard key={project.slug} project={project} cohort={cohort} />
      ))}
    </div>
  );
}

export default ResearchCard;


