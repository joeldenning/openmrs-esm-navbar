import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./topnav.css";

export default function Topnav(props: TopnavProps) {
  return (
    <nav className={styles.topnav}>
      <ul>
        <li>
          <NavLink to="/patient-search" activeClassName={styles.activeLink}>
            <span>Patient search</span>
          </NavLink>
        </li>
      </ul>
      <a
        href="https://openmrs.org"
        target="_blank"
        className={styles.logoContainer}
      >
        <img
          src="https://implementation-assets.sfo2.digitaloceanspaces.com/openmrs_logo_white_large.png"
          alt="OpenMRS Logo"
        />
      </a>
    </nav>
  );
}

type TopnavProps = {};
