"use client";
import { useEffect, useState } from "react";
import styles from "./staff.module.css";
import styles2 from "./researches.module.css";

import Link from "next/link";

interface CardData {
  FullName: string;
  ResearchAreaInterest: string;
  Bio: string;
  Picture: string;
  GithubWebsite: string;
  LinkedinWebsite: string;
}

export default function GuestSpeakers() {
  const [staff, setStudents] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/guestData.json");
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
    <div className={styles2.maindiv}>
      <h1 className={styles2.h1}>Guest Speakers</h1>
      <Link href="https://www.youtube.com/playlist?list=PLHHgHR_gbKFUW5cx8-f28YtBVMSkGp_b7">
        <button className={styles2.viewAllBtn}>View All Talks</button>
      </Link>
      <br />
      <div className={styles.cardcontainer}>
        {staff.map((staff, index) => (
          <div key={index} className={styles.card}>
            <a className={styles.a} target="_blank" rel="noopener noreferrer">
              <div className={styles.carddisplay}>
                <img
                  src={`./Avatars/GuestSpeakers/${staff.Picture}`}
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
