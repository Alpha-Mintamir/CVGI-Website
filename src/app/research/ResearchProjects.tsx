"use client";
import { Monomaniac_One } from "next/font/google";
import { Ubuntu_Sans } from "next/font/google";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAssetPath } from "@/lib/basePath";

const monomaniacOne = Monomaniac_One({ weight: "400", subsets: ["latin"] });
const ubuntu = Ubuntu_Sans({
  weight: "400",
  subsets: ["latin"],
});

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title:
      "A Scoping Review on the Applications of Diffusion Models in the Medical Field",
    description:
      "Given the recent advancements in computer vision, diffusion models have garnered significant attention within the field of medicine. This survey aims to provide a comprehensive overview of diffusion models in this domain, serving as a valuable resource for researchers navigating this rapidly evolving area.",
    link: "/research/group3",
    image: "/Research Project Images/Diffusion Models in the Medical Field.png",
  },
  {
    title:
      "Dopplegangers++: Improving 3D Reconstruction with Graph Algorithms for symmetric Objects",
    description:
      "3D reconstruction has transformed dramatically with the rise of Structure-from-Motion (SfM) tools like COLMAP which leverage image collections to create detailed 3D models. Yet, these tools often stumble when faced with objects that appear visually similar from different perspectives, think symmetrical buildings, identical cups, or repeating textures.",
    link: "/research/group3",
    image: "/Research Project Images/Dopplegangers.png",
  },
  {
    title: "Flash Stage: Relighting with Flashlight",
    description:
      "The film and gaming industries have leveraged cutting-edge technologies for years to achieve stunning realism in digital characters and environments. One such tool is the Light Stage, a sophisticated setup used to capture how light interacts with a subject's face from all directions. This data enables incredibly realistic relighting of faces in post-production, allowing characters to blend seamlessly into any scene. While the results are extraordinary, the Light Stage's complexity and cost have largely confined it to high-budget productions in Hollywood. At FlashStage, we asked ourselves a simple question: What if this powerful technology could be reimagined in a way that’s affordable, accessible, and easy to use? Could we create a solution that brings professional-grade relighting capabilities into the hands of researchers, developers, and artists worldwide? The answer is a resounding yes!",
    link: "/research/group3",
    image: "/Research Project Images/FlashStagePoster.png",
  },
  {
    title: "Inconsistencies in Novel View Synthesis for Videos",
    description:
      "In recent years, novel view synthesis has emerged as a groundbreaking area in the field of computer vision and AI. Novel view synthesis represents the generation of images and videos in a new perspective or point of view given an input image or video. NVS1 is a concept that has been studied for a while now; however, it was in the late 2010s and early 2020s that it was tackled with significant success due to advances made in machine learning. The technology holds big promise in various fields, such as realistic virtual environments, gaming, and filmmaking. In general, fields that relate to computer graphics are positively impacted by the boom of NVS. NVS has gone through significant changes since its inception. Engineers have solved a list of problems it had over the years; we will see some of these problems in other sections of this post. However, one issue that has yet to be solved in NVS is achieving video consistency throughout the frames of generated output videos. Video inconsistency is a broad term that we used to represent problems encountered in NVS-generated videos. The problems include changes in visual appearances of objects in the scene, unusual transitions in the scenes themselves, flickering backgrounds, inconsistent frames, and more. Solving video inconsistency in Novel View Synthesis is the core objective of our research. In this post, we will explore the phenomenon of video inconsistency, show how it is a major unsolved problem in the field of NVS, and suggest potential solutions to solve it.",
    link: "/research/group4",
    image:
      "/Research Project Images/Inconsistencies in Novel View Synthesis for Videos.png",
  },
  {
    title: "Adversarial Pixels: Exploring Why Vision Tasks Aren’t Fully Solved",
    description:
      "Current systems that utilize state-of-the art deep learning techniques have shown remarkable performance in vision and text tasks. We communicate with these systems and have made them part of our daily routines. Without a significant overlap in the semantics of our exchange, the communication would have been impossible. But when asking deeper questions (no pun intended) in how we humans and machines can extract the same meaning from an input or a query, we find that sometimes the same semantic information might not be extracted.",
    link: "/research/group5",
    image: "/Research Project Images/Adversarial Pixels.png",
  },
  {
    title:
      "Language-Guided Image Segmentation Models: A Comparative Study of CLIPSeg, UniLSeg, and Lang_SAM",
    description:
      "Image segmentation, the process of partitioning an image into meaningful regions, plays a vital role in computer vision applications such as autonomous vehicles, medical imaging, and content creation. Traditional segmentation methods, while effective in controlled environments, often rely on large labeled datasets and predefined object categories, making them less adaptable to new or unseen scenarios. The advent of vision-language models, particularly Contrastive Language-Image Pretraining (CLIP), has revolutionized this field. These models leverage a shared embedding space for text and images, enabling machines to interpret and respond to natural language prompts dynamically. This innovation empowers zero-shot and few-shot segmentation capabilities, where models can generalize across domains without extensive retraining or labeled data. Our work explores cutting-edge advancements in vision-language segmentation models, focusing on CLIP and its derivatives like CLIPSeg, LangSAM, and UniLSeg. We examine how these models align textual descriptions with visual features to deliver precise segmentation results across diverse applications. Through experiments and comparative analysis, we highlight their strengths, limitations, and potential to redefine how machines perceive and interact with visual data. This study serves as a window into the transformative potential of these technologies, pushing the boundaries of what is possible in automated image understanding. This post explores using CLIP in segmentation, focusing on its strengths, challenges, and future directions.",
    link: "/research/group3",
    image:
      "/Research Project Images/Language-Guided Image Segmentation Models.png",
  },
  {
    title:
      "Automated Amharic Braille Recognition Using Image Processing and Contour Detection",
    description:
      "Amharic Braille is essential for visually impaired individuals who read and write in Amharic. This project focuses on developing a computer vision-based solution to automatically detect and interpret Amharic Braille characters.",
    link: "/research/group3",
    image:
      "/Research Project Images/Automated_Amharic_Braille_Recognition_Using_Image_Processing_and.png",
  },
];

const ResearchProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "720px",
          marginTop: "65px",
          marginBottom: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={getAssetPath(projects[activeIndex].image)}
          alt="Research preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
      <section
        className="max-w-5xl mx-auto  py-12 px-6"
        style={{ padding: "60px" }}
      >
        <h2
          className={`text-4xl font-bold text-center text-cyan-700 mb-8  ${monomaniacOne.className}`}
          style={{
            marginBottom: "30px",
            fontSize: "40px",
            textAlign: "center",
            color: "#0e7490",
          }}
        >
          Research Projects
        </h2>

        <div className="space-y-10 ">
          {projects.map((project, index) => (
            <div key={index} className="p-6">
              <br />
              <h3
                className={`text-xl font-semibold mb-3 ${monomaniacOne.className}`}
                style={{
                  color: "#0e7490",
                  fontSize: "25px",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h3>
              <br />
              <div
                className={`text-base font-sans mb-3 ${ubuntu.className}`}
                style={{
                  color: "#164044",
                  fontSize: "17px",
                }}
              >
                {project.description}
              </div>
              <br />
              <Link href={project.link}>
                <button
                  className={`transition ${monomaniacOne.className} no-shadow`}
                  style={{
                    backgroundColor: "#A4E0E5",
                    width: "150px",
                    height: "44px",
                    borderRadius: "31px",
                    color: "#3A8E9C",
                    fontSize: "20px",
                    boxShadow: "none",
                    border: "none",
                    marginBottom: "50px",
                    transition: "background color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => (
                    (e.currentTarget.style.backgroundColor = "#0e7490"),
                    (e.currentTarget.style.color = "#A4E0E5")
                  )}
                  onMouseOut={(e) => (
                    (e.currentTarget.style.backgroundColor = "#A4E0E5"),
                    (e.currentTarget.style.color = "#3A8E9C")
                  )}
                >
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ResearchProjects;
