import styles from "./DropDown.module.css";

function DropDown() {
  return (
    <div className={styles.container}>
      <p className={styles.item}>Профіль</p>
      <p className={styles.item}>Вийти</p>
    </div>
  );
}

export default DropDown;
