import styles from "./Tasks.module.css";
import TasksComponent from "../../components/TasksComponent/TasksComponent";

function Tasks() {
  const generateMockData = (type: string, count: number, days: number) => {
    const today = new Date();
    const mockData = [];

    for (let i = 0; i < count; i++) {
      const deadline = new Date();
      deadline.setDate(today.getDate() + Math.floor(Math.random() * days) + 1);
      const formattedDeadline = deadline.toISOString().split("T")[0];

      const item = {
        title: `${type} ${i + 1}`,
        type: type,
        deadlineDate: formattedDeadline,
      };

      mockData.push(item);
    }

    return mockData;
  };

  const upcomingTasks = generateMockData("Лабораторна робота №", 5, 14);
  const upcomingTests = generateMockData("ТЕСТ №", 5, 14);

  const otherTasks = generateMockData("Лабораторна робота", 5, 40);
  const otherTests = generateMockData("Тест", 5, 40);

  return (
    <div className={styles.container}>
      <div className={styles.deadlines}>
        <h1>Дедлайни у найближчі 14 днів</h1>
        <TasksComponent tasks={upcomingTasks.concat(upcomingTests)} />
      </div>
      <div className={styles.deadlines}>
        <h1>Дедлайни</h1>
        <TasksComponent tasks={otherTasks.concat(otherTests)} />
      </div>
    </div>
  );
}

export default Tasks;
