import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "../styles/Home.module.scss";
import FireCursor from "../components/FireCursor";
import Sparks from "../components/Sparks";
import { ReactComponent as ScheduleIcon } from "../media/icons/schedule.svg";
import { ReactComponent as LinkIcon } from "../media/icons/link.svg";
import Carousel from "../components/Carousel";
import HighlightCard from "../components/HighlightCard";
import { events2, highlights, mainCoordinators } from "../data/data";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FireCursor />
      <Sparks />
      <Hero />

      <section className={cx(styles["intro-section"], styles["home-section"])}>
        <div className={styles["intro-bg"]}>
          <div className={styles["parallax-image"]}></div>
        </div>
        <header
          className={cx(styles.introContent, styles.sectionHeader, "container")}
        >
          <h2 className={styles.heading}>
            <span className={styles.agni}>Agni</span>
            <span className={styles._ar}>2024</span>
          </h2>
          <p className={styles.subtitle}>
            Unleash
            <br /> <span className={styles.bold}>The Elements</span> <br />
            and embrace
            <br /> <span className={styles.bold}>The Fest</span>
          </p>
          <div className={styles["header-btn-wrapper"]}>
            <NavLink
              to="/merchandise"
              className={cx("btn", styles["intro-header-btn"])}
              style={{ "--hover-bg": "#ee5100" }}
            >
              <span
                className={cx("btn-subtitle", styles["intro-btn-subtitle"])}
              >
                Agni'24 in reels
              </span>
              <span className={cx("btn-text", styles["intro-btn-text"])}>
                Merchandise
              </span>
              <LinkIcon />
            </NavLink>
          </div>
        </header>
      </section>

      {/* Highlights Section */}
      <section
        className={cx(styles["home-section"], "container", styles.highlights)}
      >
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>EVENTS</span>
          </h2>
        </header>
        <main>
          <div className={styles.hlgallery}>
            {(highlights || []).map((id) => (
              <HighlightCard user={user} key={id} {...events2[id]} />
            ))}
            <div className={styles["btn-wrapper"]}>
              <NavLink to="/events" className="btn">
                <span className="btn-subtitle">Events</span>
                <span className="btn-text">
                  Full Event
                  <br />
                  Schedule
                </span>
                <ScheduleIcon />
              </NavLink>
            </div>
          </div>
        </main>
      </section>

      {/* Coordinators Section */}
      <section className={cx(styles["home-section"], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, "container")}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: "3ch", fontSize: "8rem" }}>
              Our Team
            </span>
          </h2>
        </header>
        <main>
          <Carousel cardsList={mainCoordinators || []} />
        </main>
      </section>
    </motion.div>
  );
};

export default Home;
