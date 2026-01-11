"use client";
import styles from "./researches.module.css";

export default function AcknowledgementsSection() {
  return (
    <div className={styles.maindiv}>
      <h2 className={styles.h1}>Acknowledgements</h2>
      <div className={styles.aboutContainer}>
        <p>
          We are immensely grateful to everyone who helped make this program
          happen. We would like to start by thanking Prof. Bharath Hariharan and
          Prof. Steve Marschner for their guidance from the ideation stage to
          providing lecture materials and becoming a guest speakers. We would
          also like to express our gratitude to Emre Varol, A2SV, Mirafe and the
          ALX Ethiopia team for providing us with lab space to conduct this
          workshop. Additionally, we extend our gratitude to Prof. Noah Snavely,
          Prof. David Fouhey, and Prof. Justin Solomon for sharing their
          experiences with us on running similar initiatives. Furthermore, we
          sincerely appreciate our guest speakers and panelists who took time
          out of their busy schedules to join us: Prof. Abe Davis, Prof. Kavita
          Bala, Meron Demissie (PhD student at the University of Michigan),
          Luisa San Martin (Machine Learning Engineer at Waabi), Selam
          Gebrehiwot (MS student at the University of Genoa), and Fangyin Wei
          (Research Scientist at NVIDIA). We are also very thankful for everyone
          who helped us financially to run this initiative.
        </p>
      </div>
    </div>
  );
}


