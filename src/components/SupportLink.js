import styles from "./SupportLink.module.scss";
import cx from "classnames";

const SupportLink = () => (
  <div className={styles.support}>
    For queries and technical support, join the{" "}
    <a
      className={cx("link", styles.link)}
      target="_blank"
      rel="noreferrer"
      href="https://whatsapp.com/channel/0029VaE66JJ9xVJeMj7E8M08"
    >
      SAAS Whatsapp community
    </a>
  </div>
);

export default SupportLink;
