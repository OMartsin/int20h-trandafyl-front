import styles from "./Courses.module.css";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";

function Courses() {
  return (
    <div className={styles.container}>
      <CoursesComponent />
    </div>
  );
}

export default Courses;
