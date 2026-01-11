import styles from "./page.module.css";
import Footer from "@/ui/footer";
import Navbar from "@/ui/navbar";
import HeroSection from "@/app/home-page/Herosection";
import StudentSection from "@/app/home-page/student-section";
import ResearchSection from "@/app/home-page/researches";
import AboutSection from "./home-page/about";
import StaffSection from "./home-page/staff";
import ProgramSection from "./home-page/ProgramSection";
import GallerySection from "./home-page/GallerySection";
import GuestSpeakers from "./home-page/guest-speakers";
import AcknowledgementsSection from "./home-page/acknowledgements";

export default function Home() {
  const images = [
    "/gallery7.JPG",
    "/gallery3.JPG",
    "/gallery8.JPG",
    "/gallery5.JPG",
    "/gallery13.JPG",
    "/gallery1.JPG",
    "/gallery12.JPG",
    "/gallery9.JPG",
    "/gallery10.JPG",
    "/gallery11.JPG",
    "/gallery15.JPG",
    "/gallery14.JPG",
    "/gallery6.JPG",
  ];
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroOverlay}></div>
        <HeroSection></HeroSection>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection></AboutSection>
        <GuestSpeakers></GuestSpeakers>
      </section>

      {/* Researches Section */}
      <section id="research">
        <ResearchSection></ResearchSection>
      </section>

      {/* Students Section */}
      <section id="students">
        <StudentSection></StudentSection>
      </section>

      {/* Program Section */}
      <section id="program">
        <ProgramSection></ProgramSection>
      </section>

      {/* Students Section */}
      <section id="staff">
        <StaffSection></StaffSection>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h1 className={styles.hh1}>Gallery</h1>
        <GallerySection images={images} />
      </section>

      {/* Acknowledgements Section */}
      <section id="acknowledgements">
        <AcknowledgementsSection />
      </section>
      <Footer />
    </div>
  );
}
