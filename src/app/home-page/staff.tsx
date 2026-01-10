"use client";
import { useEffect, useState } from "react";
import styles from "./staff.module.css";

interface CardData {
  FullName: string;
  ResearchAreaInterest: string;
  Bio: string;
  Picture: string;
  GithubWebsite: string;
  LinkedinWebsite: string;
}

export default function StaffSection() {
  const [staff, setStudents] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/staffData (2).json");
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
      <h1 className={styles.h1}>Staff</h1>
      <br />
      <br />
      <div className={styles.divh3}>
        <h3 className={styles.h3}>Organizers and Mentors</h3>
      </div>
      <br />
      <div className={styles.cardcontainer}>
        {staff.map((staff, index) => (
          <div key={index} className={styles.card}>
            <a className={styles.a} target="_blank" rel="noopener noreferrer">
              <div className={styles.carddisplay}>
                <img
                  src={`./Avatars/Mentors/${staff.Picture}`}
                  alt={staff.FullName}
                />
                <h2 className={styles.h2}>{staff.FullName}</h2>
                <br />
                <p>{staff.ResearchAreaInterest}</p>
              </div>
              <div className={styles.cardhover}>
                <h2>{staff.FullName}</h2>
                <p>{staff.Bio}</p>
                <br />
                <a
                  href={staff.GithubWebsite || "#"}
                  target="_blank"
                  title={
                    staff.GithubWebsite
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
                  href={staff.LinkedinWebsite || "#"}
                  target="_blank"
                  title={
                    staff.LinkedinWebsite
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
