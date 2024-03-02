import styles from "./Grades.module.css";

export const mockGradesData = [
  {
    course: "Mathematics",
    grades: generateRandomGrades(5), // Generate 5 random grades
  },
  {
    course: "History",
    grades: generateRandomGrades(4), // Generate 4 random grades
  },
  {
    course: "Physics",
    grades: generateRandomGrades(6), // Generate 6 random grades
  },
  {
    course: "English",
    grades: generateRandomGrades(5), // Generate 5 random grades
  },
  {
    course: "Computer Science",
    grades: generateRandomGrades(4),
  },
];

function generateRandomGrades(count: number) {
  const grades = [];
  for (let i = 0; i < count; i++) {
    grades.push(Math.floor(Math.random() * 100) + 1);
  }
  return grades;
}

function Grades() {
  return (
    <div className={styles.container}>
      <h1>Оцінки</h1>
      <div className={styles.currentCourses}>
        <h3>Поточні курси</h3>
        <div className={styles.courses}>
          {mockGradesData.map((course, index) => (
            <div></div>
          ))}
        </div>
      </div>
      <div className={styles.currentCourses}>
        <h3>Архів</h3>
      </div>
    </div>
  );
}

export default Grades;
