import React, { useState } from "react";
import "./TimeTable.css";

interface ScheduleItem {
  day: string;
  classNumber: number;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  type: string;
  group: string;
}
interface ScheduleProps {
  schedule: ScheduleItem;
}

function getColorByType(type: string): string {
  const typeColors: { [key: string]: string } = {
    Lecture: "#2ecc71",
    Practical: "#3498db",
    Laboratory: "#9b59b6",
  };

  return typeColors[type];
}

const TimeTableItem: React.FC<ScheduleProps> = ({ schedule }) => {
  const [color, setColor] = useState(getColorByType(schedule.type));

  const changeColor = () => {
    setColor(getColorByType(schedule.type));
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="class-time">
        <span className="class-number">{schedule.classNumber}</span>
        <span className="time">
          {schedule.startTime} - {schedule.endTime}
        </span>
      </div>
      <div className="class-info">
        <div className="info">{schedule.subject}</div>
        <div className="teacher">{schedule.teacher}</div>
        <div className="type">{schedule.type}</div>
      </div>
    </div>
  );
};

export default TimeTableItem;
