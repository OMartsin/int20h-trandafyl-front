import styles from "./Studying.module.css";
import Performance from "../Performance/Performance";
import Tasks from "../Tasks/Tasks";
import { useState } from "react";

function Studying() {
  const [category, setCategory] = useState<string>("tasks");

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <div
          className={`${styles.category} ${
            category === "tasks" ? styles.activeCategory : ""
          }`}
          onClick={() => setCategory("tasks")}
        >
          <p>Завдання</p>
        </div>
        <div
          className={`${styles.category} ${
            category === "performance" ? styles.activeCategory : ""
          }`}
          onClick={() => setCategory("performance")}
        >
          <p>Успішність</p>
        </div>
      </div>
      <div className={styles.content}>
        {category === "tasks" && <Tasks />}
        {category === "performance" && <Performance />}
      </div>
    </div>
  );
}

export default Studying;
