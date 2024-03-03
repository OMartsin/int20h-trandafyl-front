import { Link } from "react-router-dom";
import styles from "./TaskComponent.module.css";

interface TaskInterface {
  title: string;
  type: string;
  deadlineDate: string;
}

interface TasksComponentProps {
  tasks: TaskInterface[];
}

function TasksComponent({ tasks }: TasksComponentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <p className={styles.column} style={{ fontWeight: "bold" }}>
          Завдання
        </p>
        <p className={styles.column} style={{ fontWeight: "bold" }}>
          Здати до
        </p>
        <p className={styles.column} style={{ fontWeight: "bold" }}>
          {" "}
        </p>
      </div>
      {tasks.map((task, index) => (
        <div key={index} className={styles.task}>
          <p className={styles.column}>{task.title}</p>
          <p className={styles.column}>{task.deadlineDate}</p>
          <Link to="/test" className={styles.link}>
            <div className={styles.doAction}>
              <p>{task.type === "task" ? "Здати роботу" : "Пройти тест"}</p>
              <img src="done.png" alt="done" height={"16px"} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TasksComponent;
