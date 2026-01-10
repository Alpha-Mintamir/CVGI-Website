"use client";

import React from "react";
import Image from "next/image";
import styles from "./CvgLore.module.css";

const CVGriLore: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#3A8E9C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* CVGri Character and Speech Bubble */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* CVGri Character */}
        <Image
          src="/cvgri.png"
          alt="CVGri Character"
          width={150}
          height={150}
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Speech Bubble */}
        <div className={`${styles.bubble} ${styles.left}`}>
          Welcome! You have entered the world of CVG. “What is CVG?”, you might
          ask. Well, that’s me. I’m an old soul with bad vision. My name stands
          for Cute, Visually appealing and Goofy. It totally does not stand for
          Computer Vision and Graphics like you may have thought. Anyways, feel
          free to explore. Maybe we’ll run into each other again!{" "}
        </div>
      </div>
    </div>
  );
};

export default CVGriLore;
