import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const toggleDropDownMenu = () => {
    setShowDropDownMenu(!showDropDownMenu);
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.languages}>
        <p className={styles.selected}>UKR</p>
        <p>/</p>
        <p>ENG</p>
      </div>
      <Link to="/courses" className={styles.link}>
        <p className={activeLink === "/courses" ? styles.selected : ""}>
          Курси
        </p>
        <img
          src={showDropDownMenu ? "closed.png" : "opened.png"}
          alt="closed"
          onClick={toggleDropDownMenu}
          height={"16px"}
        />
      </Link>
      <Link
        to="/events"
        className={`${styles.link} ${
          activeLink === "/events" && styles.selected
        }`}
      >
        <p>Події</p>
      </Link>
      <img src="logo.svg" alt="logo" height={"48px"} className={styles.logo} />
      <Link
        to="/schedule"
        className={`${styles.link} ${
          activeLink === "/schedule" && styles.selected
        }`}
      >
        <p>Розклад</p>
      </Link>
      <Link
        to="/performance"
        className={`${styles.link} ${
          activeLink === "/performance" && styles.selected
        }`}
      >
        <p>Успішність</p>
      </Link>
      <div className={styles.profile}>
        <Link to="/chats" className={styles.profileLink}>
          <img src="messages.png" height={"24px"} />
        </Link>
        <div className={styles.notifications}>
          <img
            src="notification.png"
            onClick={toggleNotifications}
            alt="notifications"
            height={"24px"}
          />
          {showNotifications && (
            <div className={styles.notificationsContainer}></div>
          )}
        </div>
        <Link to="/profile" className={styles.profileLink}>
          <div className={styles.profilePic}>
            <img
              src="profile_pic.jpg"
              alt="profile"
              height={"48px"}
              width={"48px"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;