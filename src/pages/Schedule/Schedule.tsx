import TimeTabletem from "../../components/TimetableItem/TimetableItem"; 
import DaySchadule from "../../components/DaySchedule/DaySchadule";
import styles from "./Schedule.module.css";
import _ from 'lodash';
import { useEffect, useState } from "react";
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
const mockSchedule: ScheduleItem[] = [
  {
    day: 'Monday',
    classNumber: 1,
    startTime: '8:30',
    endTime: '9:50',
    subject: 'Physical Education',
    teacher: 'Ivanova I.I.',
    type: 'Practical',
    group: 'CS-36'
  },
  {
    day: 'Tuesday',
    classNumber: 2,
    startTime: '10:00',
    endTime: '11:20',
    subject: 'Mathematics',
    teacher: 'Petrov P.P.',
    type: 'Lecture',
    group: 'IT-22'
  },
  {
    day: 'Wednesday',
    classNumber: 3,
    startTime: '9:00',
    endTime: '10:20',
    subject: 'History',
    teacher: 'Sidorova S.S.',
    type: 'Practical',
    group: 'CS-38'
  },
  {
    day: 'Thursday',
    classNumber: 4,
    startTime: '11:30',
    endTime: '12:50',
    subject: 'English',
    teacher: 'Smith J.J.',
    type: 'Lecture',
    group: 'IT-30'
  },
  {
    day: 'Friday',
    classNumber: 5,
    startTime: '13:00',
    endTime: '14:20',
    subject: 'Chemistry',
    teacher: 'Kovalenko K.K.',
    type: 'Laboratory',
    group: 'CS-39'
  },
  {
    day: 'Monday',
    classNumber: 6,
    startTime: '14:30',
    endTime: '15:50',
    subject: 'Computer Science',
    teacher: 'Anderson A.A.',
    type: 'Lecture',
    group: 'IT-25'
  },
  {
    day: 'Tuesday',
    classNumber: 3,
    startTime: '12:00',
    endTime: '13:20',
    subject: 'Physics',
    teacher: 'Johnson J.J.',
    type: 'Laboratory',
    group: 'CS-40'
  },
  {
    day: 'Wednesday',
    classNumber: 4,
    startTime: '14:30',
    endTime: '15:50',
    subject: 'Biology',
    teacher: 'Williams W.W.',
    type: 'Practical',
    group: 'IT-27'
  },
  // Інші об'єкти розкладу...
];
function Schedule() {
  const userGroup = 'IT-27'; // Замініть це значення на групу користувача
  const [filteredSchedule, setFilteredSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    // Фільтрація розкладу за групою користувача
    const filtered = mockSchedule.filter(schedule => schedule.group === userGroup)||[];
    setFilteredSchedule(filtered);
  }, [userGroup]); // Перевизначайте фільтрований розклад при зміні групи користувача
  const groupedSchedule = _.groupBy(mockSchedule, 'day');


  return (
    <div className={styles.schedule}>
    {Object.entries(groupedSchedule).map(([day, daySchedule], index) => (
      <div key={index} className={styles.schedule}> <DaySchadule key={index} day={day} schedule={daySchedule} /></div>
     
    ))}
  </div>
);
}

export default Schedule;
