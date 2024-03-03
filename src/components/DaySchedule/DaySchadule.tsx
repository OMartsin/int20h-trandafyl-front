import TimeTabletem from "../TimetableItem/TimetableItem";
import "./DaySchadule.css"
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
      day:string;
      schedule: ScheduleItem[];
    }
const DaySchadule:React.FC<ScheduleProps>
 = ({day,schedule}) => {
    return ( 
        <div className="day-schedule">
        <h2>{day}</h2>
        <ul>
          {schedule.map((item, index) => (
            <li key={index}>
              <TimeTabletem schedule={item}/>
            </li>
          ))}
        </ul>
      </div>
    );
    
}
 
export default DaySchadule
;