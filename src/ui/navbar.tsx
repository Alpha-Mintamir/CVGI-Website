"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  cohort?: string;
}

export default function Navbar({ cohort }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Determine if we're on a cohort page
  const isInCohort = cohort !== undefined;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // For cohort pages, show cohort-specific navigation
  if (isInCohort) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <Image src="/image.png" alt="CVGRI Logo" width={40} height={40} />
            <Link href="/" onClick={closeMenu}>
              CVGI
            </Link>
            <span className={styles.cohortBadge}>{cohort}</span>
          </div>

          {/* Hamburger Menu Button */}
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation Links */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            <li>
              <Link href={`/${cohort}`} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href={`/${cohort}#guests`} onClick={closeMenu}>
                Speakers
              </Link>
            </li>
            <li>
              <Link href={`/${cohort}/research`} onClick={closeMenu}>
                Research
              </Link>
            </li>
            <li>
              <Link href={`/${cohort}/students`} onClick={closeMenu}>
                Students
              </Link>
            </li>
            <li>
              <Link href={`/${cohort}/staff`} onClick={closeMenu}>
                Staff
              </Link>
            </li>
            <li>
              <Link href={`/${cohort}#gallery`} onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li className={styles.cohortSwitch}>
              <Link 
                href={cohort === "2024" ? "/2025" : "/2024"} 
                onClick={closeMenu}
                className={styles.switchLink}
              >
                Switch to {cohort === "2024" ? "2025" : "2024"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  // Default navigation for home page
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image src="/image.png" alt="CVGRI Logo" width={40} height={40} />
          <Link href="/" onClick={closeMenu}>
            CVGI
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
            <Link href="/2024" onClick={closeMenu}>
              Cohort 2024
            </Link>
          </li>
          <li>
            <Link href="/2025" onClick={closeMenu}>
              Cohort 2025
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
