"use client";
import { useEffect, useState } from "react";
import styles from "./staff.module.css";
import { getAssetPath } from "@/lib/basePath";

interface CardData {
  FullName: string;
  ResearchAreaInterest: string;
  Bio: string;
  Picture: string;
  GithubWebsite: string;
  LinkedinWebsite: string;
}

export default function StaffSection() {
  const [organizers, setOrganizers] = useState<CardData[]>([]);
  const [tas, setTas] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [organizersRes, tasRes] = await Promise.all([
          fetch(getAssetPath("/organizersData.json")),
          fetch(getAssetPath("/tasData.json")),
        ]);

        if (!organizersRes.ok) throw new Error("Failed to fetch organizers data");
        if (!tasRes.ok) throw new Error("Failed to fetch TAs data");

        const organizersData: CardData[] = await organizersRes.json();
        const tasData: CardData[] = await tasRes.json();

        setOrganizers(organizersData);
        setTas(tasData);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    }

    fetchData();
  }, []);

  const renderStaffCard = (staff: CardData, index: number) => (
    <div key={index} className={styles.card}>
      <div className={styles.a}>
        <div className={styles.carddisplay}>
          <img
            src={getAssetPath(`/Avatars/Mentors/${staff.Picture}`)}
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
          {staff.GithubWebsite && staff.GithubWebsite !== "https://github.com/" && (
            <a
              href={staff.GithubWebsite}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit GitHub Profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i
                className="fa fa-github"
                style={{ fontSize: "24px", marginRight: "5px" }}
              ></i>
              GitHub/Website
              <br />
            </a>
          )}
          {staff.LinkedinWebsite && (
            <a
              href={staff.LinkedinWebsite}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i
                className="fa fa-linkedin"
                style={{ fontSize: "24px", marginRight: "5px" }}
              ></i>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.maindiv}>
      <h1 className={styles.h1}>Staff</h1>
      <br />
      <br />
      <div className={styles.divh3}>
        <h3 className={styles.h3}>Organizers</h3>
      </div>
      <br />
      <div className={styles.cardcontainer}>
        {organizers.map((staff, index) => renderStaffCard(staff, index))}
      </div>

      <br />
      <br />
      <div className={styles.divh3}>
        <h3 className={styles.h3}>Teaching Assistants</h3>
      </div>
      <br />
      <div className={styles.cardcontainer}>
        {tas.map((staff, index) => renderStaffCard(staff, index))}
      </div>
    </div>
  );
}
