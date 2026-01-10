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
      <h2 className={styles.h1}>Acknowledgements</h2>
      <div className={styles.aboutContainer}>
        <p>
          We are immensely grateful to everyone who helped make this program
          happen. We would like to start by thanking Prof. Bharath Hariharan and
          Prof. Steve Marschner for their guidance from the ideation stage to
          providing lecture materials and becoming a guest speakers. We would
          also like to express our gratitude to Emre Varol and the A2SV team for
          providing us with lab space to conduct this workshop. Additionally, we
          extend our gratitude to Prof. Noah Snavely, Prof. David Fouhey, and
          Prof. Justin Solomon for sharing their experiences with us on running
          similar initiatives. Furthermore, we sincerely appreciate our guest
          speakers and panelists who took time out of their busy schedules to
          join us: Prof. Abe Davis, Prof. Kavita Bala, Meron Demissie (PhD
          student at the University of Michigan), Luisa San Martin (Machine
          Learning Engineer at Waabi), Selam Gebrehiwot (MS student at the
          University of Genoa), and Fangyin Wei (Research Scientist at NVIDIA).
          We are also very thankful for everyone who helped us financially to
          run this initiative.
        </p>
      </div>
    </div>
  );
}
