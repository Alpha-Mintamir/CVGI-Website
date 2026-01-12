import styles from "./AcknowledgementsSection.module.css";

interface AcknowledgementsSectionProps {
  cohort: string;
}

const acknowledgements: Record<string, string> = {
  "2024": `We are immensely grateful to everyone who helped make this program happen. We would like to thank Prof. Bharath Hariharan and Prof. Steve Marschner for their guidance from the ideation stage to providing lecture materials and becoming guest speakers. We also express our gratitude to Emre Varol and A2SV for providing us with lab space to conduct this workshop. Additionally, we extend our gratitude to Prof. Noah Snavely, Prof. David Fouhey, and Prof. Justin Solomon for sharing their experiences with us on running similar initiatives. We sincerely appreciate our guest speakers and panelists who took time out of their busy schedules to join us: Prof. Abe Davis, Prof. Kavita Bala, Meron Demissie, Luisa San Martin, Selam Gebrehiwot, and Fangyin Wei. We are also very thankful for everyone who helped us financially to run this initiative.`,
  
  "2025": `We are immensely grateful to everyone who helped make this program happen. We would like to express our gratitude to Mirafe and the ALX Ethiopia team for providing us with lab space to conduct this workshop. We sincerely appreciate our guest speakers, Utkarsh Mall and Kalina Borkiewicz, who took time out of their busy schedules to join us. We are also very thankful for everyone who helped us financially to run this initiative.`,
};

export default function AcknowledgementsSection({ cohort }: AcknowledgementsSectionProps) {
  const text = acknowledgements[cohort] || acknowledgements["2024"];

  return (
    <section id="acknowledgements" className={styles.acknowledgements}>
      <h2 className={styles.title}>Acknowledgements</h2>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
}

