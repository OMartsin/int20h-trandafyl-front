import styles from "./Courses.module.css";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";
import { CourseInterface } from "../../components/CoursesComponent/CoursesComponent";

export const mockCoursesData: CourseInterface[] = [
  {
    name: "Mathematics",
    description: "Introduction to Calculus",
    credits: 3,
    teachers: ["Dr. Smith", "Prof. Johnson"],
  },
  {
    name: "History",
    description: "World History: Ancient Civilizations",
    credits: 4,
    teachers: ["Dr. Davis", "Prof. Anderson"],
  },
  {
    name: "Physics",
    description: "Mechanics and Thermodynamics",
    credits: 3,
    teachers: ["Dr. White", "Prof. Miller"],
  },
];

function Courses() {
  return (
    <div className={styles.container}>
      <div className={styles.courses}>
        <h1>Поточні курси</h1>
        <CoursesComponent courses={mockCoursesData} />
      </div>
      <div className={styles.courses}>
        <h1>Архів курсів</h1>
        <CoursesComponent courses={mockCoursesData} />
      </div>
    </div>
  );
}

export default Courses;
