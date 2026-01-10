import styles from "./page.module.css";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import CVGriLore from "./CvgLore";
export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      {/* Lore Section */}
      <section>
        <CVGriLore></CVGriLore>
      </section>
      <Footer />
    </div>
  );
}
