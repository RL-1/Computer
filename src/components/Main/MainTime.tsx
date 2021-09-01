import React from 'react'
import { MainTimeType } from '../../types/data';
import { MainItems } from './MainItems';
import './Main.css';


const MainTime = ({ day = 0 ,hours = 0, minutes = 0, seconds = 60 }: MainTimeType) => {
    

    const [time, setTime] = React.useState<MainTimeType>({day,hours, minutes, seconds});
    

    const tick = () => {
        if(time.day === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0){
            reset()
        }
        else if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) 
            setTime({day:time.day -1,hours:23,minutes:59,seconds:59})
        else if (time.minutes === 0 && time.seconds === 0) {
            setTime({day:time.day,hours: time.hours - 1, minutes: 59, seconds: 59});
        } else if (time.seconds === 0) {
            setTime({day:time.day,hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({day:time.day,hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }
    };


    const reset = () => setTime({day:time.day,hours: time.hours, minutes: time.minutes, seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className = 'Main_container_box'>
            <MainItems title = 'День' time = {`${time.day.toString().padStart(2, '0')}`}/>
            <MainItems title = 'Часов' time = {`${time.hours.toString().padStart(2, '0')}`}/>
            <MainItems title = 'Минут' time = {`${time.minutes.toString().padStart(2, '0')}`}/>
            <MainItems title = 'Секунд' time = {`${time.seconds.toString().padStart(2, '0')}`}/>
        </div>
    );
}
// {time.hours.toString().padStart(2, '0')}

export { MainTime };