import styles from "./Grades.module.css";

export const mockGradesData = [
  {
    course: "Mathematics",
    grades: generateRandomGrades(5),
  },
  {
    course: "History",
    grades: generateRandomGrades(6),
  },
  {
    course: "Physics",
    grades: generateRandomGrades(6),
  },
  {
    course: "English",
    grades: generateRandomGrades(5),
  },
  {
    course: "Computer Science",
    grades: generateRandomGrades(4),
  },
];

function generateRandomGrades(count: number) {
  const grades = [];
  for (let i = 0; i < count; i++) {
    grades.push(Math.floor(Math.random() * 10) + 1);
  }
  return grades;
}

function Grades() {
  const calculateGradesSum = (grades: number[]) => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    return sum;
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оцінки</h1>
      <div className={styles.courses}>
        <div className={styles.currentCourses}>
          <h3>Поточні курси</h3>
          <div className={styles.courseInfo}>
            <p className={styles.column} style={{ fontWeight: "bold" }}>
              Дисципліна
            </p>
            <p className={styles.column} style={{ fontWeight: "bold" }}>
              Поточний контроль
            </p>
            <p className={styles.column} style={{ fontWeight: "bold" }}>
              Семестровий контроль
            </p>
          </div>
          {mockGradesData.map(({ course, grades }, index) => (
            <div key={index} className={styles.courseInfo}>
              <p className={styles.column} style={{ fontWeight: "bold" }}>
                {course}
              </p>
              <p className={styles.column}>{calculateGradesSum(grades)} / 45</p>
              <p className={styles.column}>0 / 55</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.currentCourses}>
        <h3>Архів курсів</h3>
      </div>
    </div>
  );
}

export default Grades;
