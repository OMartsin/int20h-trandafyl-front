import styles from "./Courses.module.css";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";

function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <h1>Поточні курси</h1>
        <CoursesComponent />
      </div>
      <div className={styles.courses}>
        <h1>Архів курсів</h1>
        <CoursesComponent />
      </div>
    </div>
  );
}

export default Courses;
