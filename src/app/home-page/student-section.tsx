"use client";
import { useEffect, useState } from "react";
import styles from "./student.module.css";

interface CardData {
  FullName: string;
  ResearchAreaInterest: string;
  Bio: string;
  Picture: string;
  GithubWebsite: string;
  LinkedinWebsite: string;
}

export default function StudentSection() {
  const [students, setStudents] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/sorted_studentData2 (2).json");
        if (!response.ok) throw new Error("Failed to fetch student data");
        const data: CardData[] = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    }

    fetchCards();
  }, []);

  return (
    <div className={styles.maindiv}>
      <h1 className={styles.h1}>Students</h1>
      <br />
      <div className={styles.cardcontainer}>
        {students.map((student, index) => (
          <div key={index} className={styles.card}>
            <a className={styles.a} target="_blank" rel="noopener noreferrer">
              <div className={styles.carddisplay}>
                <img
                  src={`./Avatars/Students/${student.Picture}`}
                  alt={student.FullName}
                />
                <h2 className={styles.h2}>{student.FullName}</h2>
                <br />
                <p>{student.ResearchAreaInterest}</p>
              </div>
              <div className={styles.cardhover}>
                <h2>{student.FullName}</h2>
                <p>{student.Bio}</p>
                <br />
                <a
                  href={student.GithubWebsite || "#"}
                  target="_blank"
                  title={
                    student.GithubWebsite
                      ? "Visit GitHub Profile"
                      : "No GitHub Available"
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "24px", marginRight: "5px" }}
                  ></i>
                  GitHub/Website
                </a>

                <br />
                <a
                  href={student.LinkedinWebsite || "#"}
                  target="_blank"
                  title={
                    student.LinkedinWebsite
                      ? "Visit LinkedIn Profile"
                      : "No LinkedIn Available"
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "24px", marginRight: "5px" }}
                  ></i>
                  LinkedIn
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
