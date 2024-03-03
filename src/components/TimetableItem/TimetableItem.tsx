import React, { useState } from 'react';
import "./TimeTable.css"

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
  

  function getRandomColor() {
    const lightGreenShades = ['#7FFF00', '#32CD32', '#90EE90', '#98FB98', '#ADFF2F']; 
    const lightCyanShades = ['#00FFFF', '#00CED1', '#20B2AA', '#40E0D0', '#5F9EA0'];
    const shades = Math.random() < 0.5 ? lightGreenShades : lightCyanShades; 
    return shades[Math.floor(Math.random() * shades.length)];
}
  
 
   
const TimeTabletem: React.FC<ScheduleProps> = ({ schedule }) => {
    const [color, setColor] = useState(getRandomColor());
  
    const changeColor = () => {
      setColor(getRandomColor());
    };
  
    return (  
       <div className="container" style={{backgroundColor:color}}>
                <div className="class-time">
                    <span className="class-number">{schedule.classNumber}</span>
                <span className="time">{schedule.startTime} - {schedule.endTime}</span>
                </div>
               <div className="class-info">
               <div className="info">{schedule.subject}</div>
                <div className="teacher">{schedule.teacher}</div>
                <div className="type">{schedule.type}</div>
               </div>
               
            
       </div>
    );
}
 
export default TimeTabletem;