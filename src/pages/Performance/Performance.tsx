import styles from "./Performance.module.css";
import Attendance from "../../components/Attendance/Attendance";
import Grades from "../../components/Grades/Grades";

function Performance() {
  return (
    <div className={styles.container}>
      <Attendance />
      <Grades />
    </div>
  );
}

export default Performance;
