"use client";

import styles from "./PersonCard.module.css";

export interface Person {
  FullName: string;
  ResearchAreaInterest: string;
  Bio: string;
  Picture: string;
  GithubWebsite: string;
  LinkedinWebsite: string;
}

interface PersonCardProps {
  person: Person;
  imageBasePath: string;
}

export function PersonCard({ person, imageBasePath }: PersonCardProps) {
  return (
    <div className={styles.card}>
      <a className={styles.cardInner} target="_blank" rel="noopener noreferrer">
        <div className={styles.cardDisplay}>
          <div className={styles.imageWrapper}>
            <img
              src={`${imageBasePath}/${person.Picture}`}
              alt={person.FullName}
            />
          </div>
          <h2>{person.FullName}</h2>
          <br />
          <p>{person.ResearchAreaInterest}</p>
        </div>
        <div className={styles.cardHover}>
          <h2>{person.FullName}</h2>
          <p>{person.Bio}</p>
          <br />
          {person.GithubWebsite && (
            <a
              href={person.GithubWebsite}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit GitHub/Website"
              className={styles.socialLink}
            >
              <i className="fa fa-github" style={{ fontSize: "24px" }}></i>
              GitHub/Website
            </a>
          )}
          {!person.GithubWebsite && (
            <span className={styles.socialLink} style={{ opacity: 0.5 }}>
              <i className="fa fa-github" style={{ fontSize: "24px" }}></i>
              GitHub/Website
            </span>
          )}
          <br />
          {person.LinkedinWebsite && (
            <a
              href={person.LinkedinWebsite.startsWith("http") ? person.LinkedinWebsite : `https://${person.LinkedinWebsite}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn Profile"
              className={styles.socialLink}
            >
              <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
              LinkedIn
            </a>
          )}
          {!person.LinkedinWebsite && (
            <span className={styles.socialLink} style={{ opacity: 0.5 }}>
              <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
              LinkedIn
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

interface PersonGridProps {
  people: Person[];
  imageBasePath: string;
}

export function PersonGrid({ people, imageBasePath }: PersonGridProps) {
  return (
    <div className={styles.cardGrid}>
      {people.map((person, index) => (
        <PersonCard key={index} person={person} imageBasePath={imageBasePath} />
      ))}
    </div>
  );
}

export default PersonCard;

