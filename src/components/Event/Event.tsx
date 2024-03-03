import "./Event.css";
interface EventData
{
    img:string;
    hourStart:string;
    month:string;
    monthDay:number;
    name:string;
    place:string
}

interface PropsEvent{
    parameter:EventData
}
const randomColor = () => {
    const r = Math.floor(Math.random() * 200); 
    const g = Math.floor(Math.random() * 200); 
    const b = Math.floor(Math.random() * 200); 
    const a = Math.random() * 0.5 + 0.3; 
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
const Event:React.FC<PropsEvent> = ({parameter}) => {
    const layout = [];
    const sizes = ['small', 'medium', 'large']; 
      const color = randomColor(); 
      const size = sizes[Math.floor(Math.random() * sizes.length)]; 
    
    return (
         <div className="container " style={{backgroundColor:color} }>
            <img src={parameter.img} alt="картинка" />
            <div className="event-info">
                <div className="up-info">
                    <div>{parameter.month}</div>
                    <div> початок о {parameter.hourStart}</div>
                </div>
                <div className="down-info">
                    <div className="day">{parameter.monthDay}</div>
                    <div className="name"> {parameter.name}</div>
                </div>
                <div className="place-div">
                    <div> <img src="location.png" alt="location" /></div>
                    <div className="place">{parameter.place}</div>
                </div>
            </div>
    </div> 
    );
}
 
export default Event;