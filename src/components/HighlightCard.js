import { NavLink } from "react-router-dom";
import styles from "./HighlightCard.module.scss";

const HighlightCard = ({
  figureSrc,
  title,
  desc,
  type,
  isRegistrationOpen,
  user,
  time,
  venue,
  href,
  id,
}) => (
  <NavLink to={`/events`} className={styles.cardLink}>
    <article className={styles.card}>
      <figure>
        <img alt="" src={figureSrc} />
      </figure>
      <main>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>
          <div className={styles.desc}>{desc}</div>
          {type === "Contest" && isRegistrationOpen ? (
            <div className={styles.type}>Registrations open</div>
          ) : (
            <div className={styles.type}>{type}</div>
          )}
        </div>
        <div className={styles.details}>
          <h4 className={styles.time}>{time}</h4>
          <h4 className={styles.venue}>{venue}</h4>
        </div>
        {/* Show Register button only for Concert Night */}
        {title === "Concert Night" && href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerButton}
          >
            Register
          </a>
        )}
      </main>
    </article>
  </NavLink>
);

export default HighlightCard;
