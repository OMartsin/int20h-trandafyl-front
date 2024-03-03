import styles from "./DropDown.module.css";
import { Link } from "react-router-dom";

interface DropDownProps {
  closeDropDown: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ closeDropDown }) => {
  return (
    <div className={styles.container}>
      <Link to="/profile" className={styles.link} onClick={closeDropDown}>
        <p className={styles.item}>Мій профіль</p>
      </Link>
      <p className={styles.item}>Вийти</p>
    </div>
  );
};

export default DropDown;
