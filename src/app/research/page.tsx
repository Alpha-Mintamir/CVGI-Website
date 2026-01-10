import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import ResearchProjects from "./ResearchProjects";
import styles from "../page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <main>
        <Navbar></Navbar>
        <section>
          <ResearchProjects></ResearchProjects>
        </section>{" "}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
