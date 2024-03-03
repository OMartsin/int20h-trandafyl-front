import styles from "./CoursesComponent.module.css";

export interface CourseInterface {
  name: string;
  description: string;
  credits: number;
  teachers: string[];
}

interface CoursesProps {
  courses: CourseInterface[];
}

function CoursesComponent({ courses }: CoursesProps) {
  return (
    <div className={styles.container}>
      {courses.map((course, index) => (
        <div className={styles.course}>
          <p>{course.name}</p>
          <p>{course.description}</p>
          <p>{course.credits}</p>
          <p>{course.teachers.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default CoursesComponent;
