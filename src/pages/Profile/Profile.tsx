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

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.firstColumn}>
        <div className={styles.name}>
          <h1>Міньковець Людмила</h1>
        </div>
        <div className={styles.coursesContainer}>
          <h2 style={{ marginBottom: "16px" }}>Курси</h2>
          {mockCoursesData.map((course, index) => (
            <p style={{ cursor: "pointer" }}>{course.name}</p>
          ))}
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
              <p className={styles.subtitle}>Житомир</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Електронна пошта</p>
              <p className={styles.subtitle}>maria.kolir.pz.2022@edu.lpnu.ua</p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Інстаграм</p>
              <p className={styles.subtitle}>https://instagram/maria_ko</p>
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
