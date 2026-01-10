"use client";
import React from "react";
import Image from "next/image";
import { Monomaniac_One } from "next/font/google";
import { Ubuntu_Sans } from "next/font/google";

const monomaniacOne = Monomaniac_One({
  weight: "400",
  subsets: ["latin"],
});

const ubuntu = Ubuntu_Sans({
  weight: "400",
  subsets: ["latin"],
});

interface ProgramWeek {
  week: string;
  days: string[];
  imageSrc: string;
}

const programData: ProgramWeek[] = [
  {
    week: "Week 1 (Tutorial Week)",
    days: [
      "Day 1: Morning: - Introduction lecture on CV/Graphics",
      "Day 1: Afternoon: - Lecture on basic Computer Vision topics \n - programming assignment 1",
      "Day 2: Morning: - Lecture for Object Detection and Segmentation",
      "Day 2: Afternoon: - Programming assignment 2",
    ],
    imageSrc: "/gallery1.jpg",
  },
  {
    week: "Week 2 (Tutorial Week and Research Week)",
    days: [
      "Day 3: Morning: - Student presentation on what they have learned so far - Lecture on 3D reconstruction I",
      "Day 3: Afternoon - Programming assignment 3",
      "Day 3: Night - Guest speaker",
      "Day 4: Morning - Lecture on 3D reconstruction II",
      "Day 4: Afternoon - Programming assignment 3",
      "Day 5: Morning - Lecture on Rendering",
      "Day 5: Afternoon - Programming assignment 4",
      "Day 6: Morning - Student presentation on what they have learned so far - Research project selection",
    ],
    imageSrc: "/gallery3.jpg",
  },
  {
    week: "Week 3 (Research Week and Presentation)",
    days: [
      "Students worked on their main research with their mentors for over a week.",
      "Group Presentations and showcase on the main research topics that students chose with their mentors.",
      "Closing day celebrations and social games with everyone @ Friendship Park :)",
    ],
    imageSrc: "/gallery4.jpg",
  },
];

const ProgramSection: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        className={monomaniacOne.className}
        style={{ color: "#3A8E9C", fontSize: "2rem", marginBottom: "20px" }}
      >
        Program
      </h1>
      {programData.map((program, index) => (
        <div
          key={index}
          className={`program-item ${ubuntu.className}`}
          style={{
            display: "flex",
            fontSize: "1.1rem",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap",
            color: "#307379",
          }}
        >
          <div
            className="text-container"
            style={{
              flex: 1,
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            <h2
              className={monomaniacOne.className}
              style={{ color: "#3A8E9C", marginBottom: "20px" }}
            >
              {program.week}
            </h2>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {program.days.map((day, dayIndex) => (
                <li
                  key={dayIndex}
                  style={{ marginBottom: "10px", lineHeight: "1.5" }}
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="image-container"
            style={{
              flex: 1,
              textAlign: "right",
              maxWidth: "100%",
            }}
          >
            <Image
              src={program.imageSrc}
              alt={`Image for ${program.week}`}
              width={550}
              height={250}
              style={{
                width: "90%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      ))}
      <style jsx>{`
        @media (max-width: 900) {
          .program-item {
            flex-direction: column !important;
          }
          .image-container {
            order: -1; /* Move the image to the top */
            text-align: center !important; /* Align the image to the center */
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramSection;
