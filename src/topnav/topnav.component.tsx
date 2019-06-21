import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./topnav.css";
import LoggedInUserDisplay from "./logged-in-user-display.component";
import Parcel from "single-spa-react/parcel";

const patientSearch = System.import("@hackathon/patient-search").then(
  patientSearchModule => {
    return patientSearchModule.PatientSearchWidget;
  }
);

export default function Topnav(props: TopnavProps) {
  return (
    <nav className={styles.topnav}>
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
      <div className={styles.search}>
      <Parcel config={patientSearch} history={props.history} />
      </div>
      <ul>
        <li>
          <LoggedInUserDisplay />
        </li>
        <li>
          <a href="/openmrs/appui/header/logout.action?successUrl=openmrs">
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

type TopnavProps = {
  history?: {
    push(newUrl: String): void;
  };
};
