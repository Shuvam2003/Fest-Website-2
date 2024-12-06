import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import cx from "classnames";
import agniLogo from "../assets/agni.png";

const links = [
  { link: "/", name: "Home", onlyMobile: true },
  { link: "/events", name: "What's on" },
  { link: "/merchandise", name: "Merchandise" },
  { link: "/Sponsor", name: "Sponsor" },
];

const NavItem = ({ name, link, handleClick }) => (
  <div className={styles.navItemContainer}>
    <NavLink
      to={link}
      onClick={handleClick}
      className={(state) =>
        cx(styles["router-link"], "link", { [styles.active]: state.isActive })
      }
    >
      {name}
    </NavLink>
    <div className={styles.container}>
      <div className={styles.corpus}>
        <div className={styles["diamond-right"]}></div>
        <div
          className={
            styles.diamond +
            " " +
            styles["diamond-inner"] +
            " " +
            styles["diamond-left"]
          }
        ></div>
      </div>
    </div>
  </div>
);

const Navigation = ({ user }) => {
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(`[class*="${styles.mobile}"]`);
    const mobileNavBtns = document.querySelectorAll(
      `[class*="${styles["mobile-hamburger-btn"]}"]`
    );

    mobileNavBtns.forEach((btn) => {
      btn.classList.toggle(styles.active);
    });

    if (mobileNav) {
      mobileNav.classList.toggle(styles.active);
      document.body.style.overflow = mobileNav.classList.contains(styles.active)
        ? "hidden"
        : "auto";
    }
  };

  return (
    <header>
      <nav className={styles.nav} id="nav">
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={agniLogo} alt="Agni Logo" className={styles.logoImage} />{" "}
          </NavLink>
        </div>
        <div className={cx(styles["router-links"], styles.desktop)}>
          {links
            .filter((link) => !link.onlyMobile && (!link.auth || user.user))
            .map((link) => (
              <NavItem key={link.name} {...link} />
            ))}
        </div>
        <button
          aria-label="Menu"
          className={styles["mobile-hamburger-btn"]}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleMobileNav();
          }}
        >
          Close
        </button>
      </nav>
      <nav className={styles.mobile}>
        <button
          aria-label="Menu"
          className={styles["mobile-hamburger-btn"]}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleMobileNav();
          }}
        >
          Close
        </button>
        <ul className={styles["router-links"]}>
          {links
            .filter((link) => !link.auth || user.user)
            .map((link) => (
              <li key={link.name}>
                <NavItem handleClick={toggleMobileNav} {...link} />
              </li>
            ))}
        </ul>
        <div className={styles["nav-footer"]}>&copy;SAAS 2024-25 </div>
      </nav>
    </header>
  );
};

export default Navigation;
