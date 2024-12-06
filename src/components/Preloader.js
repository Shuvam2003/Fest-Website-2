import React, { useEffect, useState } from "react";
import videoBg from "../assets/agni.mp4";
import agniLogo from "../assets/agni.png";
import styles from "./Preloader.module.scss";

const Preloader = ({ onComplete }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onComplete(); // Call onComplete function after 5 seconds (or video duration)
  //   }, 5000); // Adjust the duration based on your video length or desired loading time

  //   return () => clearTimeout(timer);
  // }, [onComplete]);

  return (
    <div className={styles.preloader}>
      <video src={videoBg} autoPlay muted loop className={styles.video} />
      <div className={styles["logo-container"]}>
        <img src={agniLogo} alt="Agni Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Preloader;
