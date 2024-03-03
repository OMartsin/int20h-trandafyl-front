import styles from "./Attendance.module.css";

function generateMockAttendanceData() {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2023, 11, 30);

  const attendanceData = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const attendancePercentage = Math.floor(Math.random() * 100) + 1;

    let attendanceCategory;

    if (attendancePercentage === 100) {
      attendanceCategory = "attendance100";
    } else if (attendancePercentage >= 75) {
      attendanceCategory = "attendance75";
    } else if (attendancePercentage >= 50) {
      attendanceCategory = "attendance50";
    } else if (attendancePercentage >= 25) {
      attendanceCategory = "attendance25";
    } else {
      attendanceCategory = "attendance0";
    }

    attendanceData.push({
      date: currentDate.toISOString().split("T")[0],
      attendance: attendanceCategory,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return attendanceData;
}

function Attendance() {
  const mockAttendanceData = generateMockAttendanceData();

  const calculatePercentageOfAttendance = () => {
    const totalDays = mockAttendanceData.length;
    const attendedDays = mockAttendanceData.filter(
      (day) => day.attendance !== "attendance0"
    ).length;
    const percentage = (attendedDays / totalDays) * 100;
    return Math.round(percentage);
  };

  const chooseEmoji = () => {
    const attendancePercentage = calculatePercentageOfAttendance();
    let imagePath;
    if (attendancePercentage === 100) {
      imagePath = "star.png";
    } else if (attendancePercentage >= 75) {
      imagePath = "smile.png";
    } else if (attendancePercentage >= 50) {
      imagePath = "neutral.png";
    } else if (attendancePercentage >= 25) {
      imagePath = "what.png";
    } else {
      imagePath = "dead.png";
    }
    return imagePath;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Відвідуваність</h1>
      <div className={styles.attendanceOverall}>
        <p>
          Ти відвідав {calculatePercentageOfAttendance()}% пар протягом року
        </p>
        <img src={chooseEmoji()} alt="emoji" height={"24px"} />
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.days}>
          <p>Пн</p>
          <p>Ср</p>
          <p>Пт</p>
          <p>Нд</p>
        </div>
        <div className={styles.attendanceGraph}>
          {mockAttendanceData.map((day, index) => (
            <div
              key={index}
              className={`${styles.contributionDay} ${
                styles[`${day.attendance}`]
              }`}
              title={`${day.date}: ${day.attendance}% attendance`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
