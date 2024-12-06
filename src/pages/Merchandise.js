import styles from "../styles/Merchendise.module.scss";
import cx from "classnames";
import "react-html5video/dist/styles.css";
import { motion } from "framer-motion";
import image from "../assets/merch.png";
import videoBg from "../assets/aurora-forest-moewalls-com.mp4"; // Import your video file

const Merchandise = ({ user }) => {
  return (
    <motion.div
      className={cx(styles.events, "page-transition", "container")}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx("page-header", styles["page-header"])}>
        <div className={cx("subtitle", styles["header-subtitle"])}>
          <h3 className="heading">
            <span style={{ fontSize: "12vw" }}>Merchandise</span>
          </h3>
        </div>
      </header>

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

      <main className={cx(styles["main-content"])}>
        <div className={cx(styles["gallery"])}>
          {/* Merchandise Intro Section */}
          <div className={cx(styles["merch-item"])}>
            <img
              src={image} // Replace with actual image path
              alt="Merchandise"
              className={styles["merch-image"]}
            />
            <div className={styles["merch-description"]}>
              <h2 className={styles["title-gradient"]}>
                Concert Night T-Shirt
              </h2>

              <h2 style={{ fontSize: "1.9rem" }}>
                Wear the spirit of festivity at concert night!
              </h2>
              <h6 style={{ fontWeight: "normal" }}>
                Buy <b>one</b> T-shirt{" "}
                <b className={styles["amount"]}>@Rs 149/-</b> <br />
                For bulk of{" "}
                <b className={styles["amount"]} style={{ color: "#000" }}>
                  5
                </b>{" "}
                T-shirts <b className={styles["amount"]}>@Rs 699/- </b>
              </h6>
              <h6
                style={{
                  fontWeight: "normal",
                  color: "#D2FF72",
                  fontSize: "1.7rem",
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Wear the T-shirt and meet our singers on concert day!
              </h6>
              <a
                href="https://forms.gle/4D2iDxLyZyMdPwSd6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["buy-button"]}
              >
                Buy Now
              </a>

              <h6 style={{ fontWeight: "normal", fontSize: "1rem" }}>
                <b>Last Date for Registration:</b>{" "}
                <b className={styles["amount"]} style={{ fontSize: "2rem" }}>
                  Oct 31st 2024
                </b>
                <br />
                <br></br>
              </h6>
            </div>
          </div>
        </div>
        <br />
      </main>
    </motion.div>
  );
};

export default Merchandise;
