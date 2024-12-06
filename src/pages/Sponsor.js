import React from "react";
import styles from "../styles/Sponsor.module.scss";
import videoBg from "../assets/autumn-tree-cloudy-sky-sunset-moewalls-com.mp4";
import kraftonLogo from "../assets/sponsor/krafton.png";
import rajamsLogo from "../assets/sponsor/rajams.png";
import agsLogo from "../assets/sponsor/ags.png";
import viralLogo from "../assets/sponsor/viral.png";
import hgLogo from "../assets/sponsor/hg.png";
import adsLogo from "../assets/sponsor/ads.png";
import vetriLogo from "../assets/sponsor/vetri.png";
import aacLogo from "../assets/sponsor/AACEG_.jpeg";
import mediLogo from "../assets/sponsor/Medi.png";

const Sponsor = () => (
  <div className={styles.container}>
    {/* Background Video Section */}
    <div className={styles["video-background"]}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles["background-video"]}
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <h1 className={styles["coming-soon"]}>Our Sponsors</h1>
    <p className={styles.message}>
      We are proud to present our incredible lineup of sponsors!
    </p>
    Sponsors Section
    <div className={styles.sponsors}>
      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={agsLogo} alt="AGS Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Official Multiplex Partner</h2>
              <p>AGS Cinemas</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, AGS Cinemas!</h2>
            <p>For being our Official Multiplex Partner</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={viralLogo} alt="vf Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Refreshment Sponsor</h2>
              <p>Viral Fission</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Viral Fission!</h2>
            <p>For being our Refreshment Sponsor</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={kraftonLogo} alt="Krafton Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Signature Events Sponsor</h2>
              <p>Krafton</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Krafton!</h2>
            <p>For being our Signature Events Sponsor</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={hgLogo} alt="vf Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Merchandise Partner</h2>
              <p>Hayati Garments</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Hayati Garments!</h2>
            <p>For being our Merchandise Partner</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={adsLogo} alt="vf Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Printing Partner</h2>
              <p>123 Adprints</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, 123 Adprints!</h2>
            <p>For being our Printing Partner</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <a
              href="https://rajams.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.sponsors}
                src={rajamsLogo}
                alt="Rajams Logo"
              />
            </a>
            <div className={styles.sponsorInfo}>
              <h2>Printing Partner</h2>
              <p>Rajams digital</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Rajams!</h2>
            <p>For being our Printing Partner</p>
          </div>
        </div>
      </div>
      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={vetriLogo} alt="vetri Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Event Sponsor</h2>
              <p>Vetri tours n travels</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Vetri tours n travels!</h2>
            <p>For being our Event Sponsor</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={aacLogo} alt="aaceg Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Supportive Sponsor</h2>
              <p>AACEG</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, AACEG!</h2>
            <p>For being our Supportive Sponsor</p>
          </div>
        </div>
      </div>

      <div className={styles.sponsorCard}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img src={mediLogo} alt="medi Logo" className={styles.logo} />
            <div className={styles.sponsorInfo}>
              <h2>Hygiene Sponsor</h2>
              <p>Medimix</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <h2>Thank you, Medimix!</h2>
            <p>For being our Hygiene Sponsor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sponsor;

// import React from "react";
// import styles from "../styles/Sponsor.module.scss";
// import videoBg from "../assets/autumn-tree-cloudy-sky-sunset-moewalls-com.mp4";

// const Sponsor = () => (
//   <div className={styles.container}>
//     {/* Background Video Section */}
//     <div className={styles["video-background"]}>
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className={styles["background-video"]}
//       >
//         <source src={videoBg} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>

//     <h1 className={styles["coming-soon"]}>Our Sponsors</h1>
//     <p className={styles.message}>
//       We're gathering an incredible lineup of sponsors for you. Stay tuned!
//     </p>
//     <div className={styles["animated-coming-soon"]}>
//       <span className={styles.coming}>Coming</span>
//       <span className={styles.soon}>Soon</span>
//     </div>
//   </div>
// );

// export default Sponsor;
