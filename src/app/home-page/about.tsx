"use client";
import styles from "./researches.module.css";

export default function AboutSection() {
  return (
    <div className={styles.maindiv}>
      <h2 className={styles.h1}>About</h2>
      <div className={styles.aboutContainer}>
        <p>
          <b>Computer Vision and Graphics Research Initiatives</b> is a
          three-week research initiative. It is designed to provide students
          with hands-on research experience in computer vision and graphics. In
          the first week, students attend full-day, in-person sessions featuring
          lectures and hands on programming assignements. Over the following two
          weeks, they work in a hybrid setting on research projects under the
          guidance of mentors who worked at institutions such as Cornell
          University, the University of Michigan, Google and more. The program
          also includes guest lectures from leading experts and a panel
          discussion, where students gain insights into both academic and
          industry careers. This is a highly competitive program, selecting
          approximately 27 students from a pool of 150 applicants. Through
          mentorship and immersive learning, the workshop aims to equip students
          with research skills and exposure to cutting-edge developments in the
          field.
        </p>
      </div>
    </div>
  );
}
