"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image src="/image.png" alt="CVGRI Logo" width={40} height={40} />
          <Link href={isHome ? `#home` : `/#home`} onClick={closeMenu}>
            CVGI
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
            <Link href={isHome ? `#about` : `/#about`} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              href={isHome ? `#research` : `/#research`}
              onClick={closeMenu}
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              href={isHome ? `#students` : `/#students`}
              onClick={closeMenu}
            >
              Students
            </Link>
          </li>
          <li>
            <Link href={isHome ? `#program` : `/#program`} onClick={closeMenu}>
              Program
            </Link>
          </li>
          <li>
            <Link href={isHome ? `#staff` : `/#staff`} onClick={closeMenu}>
              Staff
            </Link>
          </li>
          <li>
            <Link href={isHome ? `#gallery` : `/#gallery`} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
