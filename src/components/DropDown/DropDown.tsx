import styles from "./DropDown.module.css";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className={styles.container}>
      <Link to="/profile" className={styles.link}>
        <p className={styles.item}>Мій профіль</p>
      </Link>
      <p className={styles.item}>Вийти</p>
    </div>
  );
}

export default DropDown;
