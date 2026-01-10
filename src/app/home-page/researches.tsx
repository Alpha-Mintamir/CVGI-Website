"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./researches.module.css";

const projects = [
  {
    title:
      "A Scoping Review on the Applications of Diffusion Models in the Medical Field",
    image: "/Research Project Images/Diffusion Models in the Medical Field.png",
    link: "/research/group1",
  },
  {
    title:
      "Dopplegangers++: Improving 3D Reconstruction with Graph Algorithms for symmetric Objects",
    image: "/Research Project Images/Dopplegangers.png",
    link: "/research/group2",
  },
  {
    title: "Flash Stage: Relighting with Flashlight",
    image: "/Research Project Images/FlashStagePoster.png",
    link: "/research/group3",
  },
  {
    title: "Inconsistencies in Novel View Synthesis for Videos",
    image:
      "/Research Project Images/Inconsistencies in Novel View Synthesis for Videos.png",
    link: "/research/group4",
  },
  {
    title: "Adversarial Pixels: Exploring Why Vision Tasks Aren’t Fully Solved",
    image: "/Research Project Images/Adversarial Pixels.png",
    link: "/research/group5",
  },
  {
    title:
      "Language-Guided Image Segmentation Models: A Comparative Study of CLIPSeg, UniLSeg, and Lang_SAM",
    image:
      "/Research Project Images/Language-Guided Image Segmentation Models.png",
    link: "/research/group6",
  },
  {
    title:
      "Automated Amharic Braille Recognition Using Image Processing and Contour Detection",
    image:
      "/Research Project Images/Automated_Amharic_Braille_Recognition_Using_Image_Processing_and.png",
    link: "/research/group7",
  },
];

export default function ResearchProjects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.maindiv}>
      <h2 className={styles.h1}>Research Projects</h2>
      <Link href="/research">
        <button className={styles.viewAllBtn}>View All Researches</button>
      </Link>

      <div className={styles.bigContainer}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {projects.map((project, index) => (
              <li
                key={index}
                className={styles.listItem}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <span className={styles.dot}>•</span>
                <Link href={project.link}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={projects[selectedIndex].image}
            className={styles.imageRes}
            alt="Project preview"
          />
        </div>
      </div>
    </div>
  );
}
