import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const toogleDropDownMenu = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.languages}></div>
      <Link to="/courses" className={styles.link}>
        <p>Курси</p>
        <img src="" alt="closed" onClick={toogleDropDownMenu} />
      </Link>
      <Link to="/events" className={styles.link}>
        <p>Події</p>
      </Link>
    </div>
  );
}

export default Header;
