import ResearchProjects from "./ResearchProjects";
import styles from "../page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <main>
        <section>
          <ResearchProjects></ResearchProjects>
        </section>
      </main>
    </div>
  );
}
