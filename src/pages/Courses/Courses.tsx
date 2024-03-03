import styles from "./Courses.module.css";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";
import { CourseInterface } from "../../components/CoursesComponent/CoursesComponent";

export const mockCoursesData: CourseInterface[] = [
  {
    name: "Математика",
    description: "Вступ до курсу з калькулюсу",
    credits: 3,
    teachers: ["Доктор Сміт", "Професор Джонсон"],
  },
  {
    name: "Історія",
    description: "Світова історія: Давні цивілізації",
    credits: 4,
    teachers: ["Доктор Дейвіс", "Професор Андерсон"],
  },
  {
    name: "Фізика",
    description: "Механіка та термодинаміка",
    credits: 3,
    teachers: ["Доктор Уайт", "Професор Міллер"],
  },
  {
    name: "Хімія",
    description: "Основи неорганічної хімії",
    credits: 4,
    teachers: ["Доктор Браун", "Професор Джонс"],
  },
  {
    name: "Інформатика",
    description: "Введення в програмування",
    credits: 3,
    teachers: ["Доктор Робінсон", "Професор Тейлор"],
  },
  {
    name: "Економіка",
    description: "Основи макроекономіки",
    credits: 3,
    teachers: ["Доктор Іванов", "Професор Петров"],
  },
  {
    name: "Мовознавство",
    description: "Структура сучасної української мови",
    credits: 4,
    teachers: ["Доктор Сидоренко", "Професор Коваль"],
  },
];

export const additionalMockCoursesData: CourseInterface[] = [
  {
    name: "Біологія",
    description: "Вступ до клітинної біології",
    credits: 3,
    teachers: ["Доктор Петренко", "Професор Кравчук"],
  },
  {
    name: "Географія",
    description: "Фізична географія світу",
    credits: 4,
    teachers: ["Доктор Іваненко", "Професор Сергієнко"],
  },
  {
    name: "Соціологія",
    description: "Основи соціальних наук",
    credits: 3,
    teachers: ["Доктор Ковальчук", "Професор Павленко"],
  },
  {
    name: "Психологія",
    description: "Розвиток особистості",
    credits: 4,
    teachers: ["Доктор Михайленко", "Професор Лисенко"],
  },
  {
    name: "Юриспруденція",
    description: "Громадянське право",
    credits: 3,
    teachers: ["Доктор Сидоров", "Професор Яременко"],
  },
  {
    name: "Філософія",
    description: "Сходження до істини",
    credits: 4,
    teachers: ["Доктор Філатов", "Професор Григоренко"],
  },
  {
    name: "Інженерія",
    description: "Основи технічних наук",
    credits: 3,
    teachers: ["Доктор Технік", "Професор Інженеров"],
  },
  {
    name: "Медицина",
    description: "Вступ до медичних наук",
    credits: 4,
    teachers: ["Доктор Здоров'я", "Професор Лікар"],
  },
  {
    name: "Екологія",
    description: "Екологічна безпека",
    credits: 3,
    teachers: ["Доктор Природи", "Професор Охорони"],
  },
  {
    name: "Маркетинг",
    description: "Стратегії ринкового взаємодії",
    credits: 4,
    teachers: ["Доктор Маркетолог", "Професор Реклама"],
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
        <CoursesComponent courses={additionalMockCoursesData} />
      </div>
    </div>
  );
}

export default Courses;
