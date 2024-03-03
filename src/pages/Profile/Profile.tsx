/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../const";
import styles from "./Profile.module.css";

export const mockCoursesData = [
  {
    name: "Mathematics",
  },
  {
    name: "History",
  },
  {
    name: "Physics",
  },
  {
    name: "Аналіз вимог до програмного забезпечення",
  },
  {
    name: "Основи охорони праці та безпека життєдіяльності",
  },
];

interface Student {
  id?: string;
  email?: string;
  name: string;
  surname: string;
  groups: Group[];
}

interface Group {
  id: string;
  speciality: string;
  year: number;
  number: number;
  degreeType: string;
}

interface Course {
  id: string;
  name: string;
}

function Profile() {
  const [student, setStudent] = useState<Student>({
    name: "",
    surname: "",
    groups: [],
  });
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + "students/", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setStudent(data);
      } catch (error) {
      }
    };

    const getStudentCourses = async () => {
      try {
        const response = await fetch(SERVER_URL + "groups/" + student.groups[0].speciality + "-" +
          student.groups[0].year + student.groups[1].number + "/", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        setCourses(data.courses);
      } catch (error) {
        console.error("Error during getting student courses", error);
      }
    };

    fetchData();
    getStudentCourses();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstColumn}>
        <div className={styles.name}>
          <h1>{student.name + " " + student.surname}</h1>
        </div>
        <div className={styles.coursesContainer}>
  <h2 style={{ marginBottom: "16px" }}>Курси</h2>
  {courses.length === 0 ? (
    <p>Вибачте, але ви не зареєстровані на жоден курс</p>
  ) : (
    courses.map((course, index) => (
      <div key={index} className={styles.course}>
        <p>{course.name}</p>
      </div>
    ))
  )}
</div>
</div>
      <div className={styles.secondColumn}>
        <div className={styles.profilePic}>
          <img src="profile_pic.jpg" alt="profile" height={"180px"} />
          <div className={styles.edit}>
            <p>Змінити фото</p>
            <img src="edit.png" alt="edit" height={"16px"} />
          </div>
        </div>
        <div className={styles.personalInfo}>
          <h2 style={{ marginBottom: "16px" }}>Дані</h2>
          <div className={styles.info}>
            <div className={styles.item}>
              <p className={styles.title}>Вік</p>
              <p className={styles.subtitle}>20</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Місто</p>
              <p className={styles.subtitle}>Львів</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Електронна пошта</p>
              <p className={styles.subtitle}>{student.email}</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Інстаграм</p>
              <p className={styles.subtitle}>https://instagram/o_marcin</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Інтереси</p>
              <p className={styles.subtitle}>читання, спорт, скрипка</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statisticsContainer}>
        <div className={styles.gradesContainer}>
          <h2>Аналітика та статистика</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
