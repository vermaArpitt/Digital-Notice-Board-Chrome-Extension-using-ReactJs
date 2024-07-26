import React, {useState, useEffect} from "react";
import './PomodoroWidget.css';
import startImage from '../../assets/play-fill.svg';
import stopImage from '../../assets/pause-fill.svg';
import resetImage from '../../assets/arrow-clockwise.svg';

const PomodoroWidget = () =>
{
    const WORK_TIME = 25 * 60; // 25 minutes
    const REST_TIME = 5 * 60; // 5 minutes

    const [time, setTime] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [isWorkPeriod, setIsWorkPeriod] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
        interval = setInterval(() => {
            setTime((time) => {
            if (time > 0) return time - 1;

            if (isWorkPeriod) {
                setIsWorkPeriod(false);
                return REST_TIME;
            } else {
                setIsWorkPeriod(true);
                return WORK_TIME;
            }
            });
        }, 1000);
        } else {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isWorkPeriod]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(WORK_TIME);
        setIsWorkPeriod(true);
    };

    const handleIncrease = () =>{
        setTime(time + 300);
    };

    const handleDecrease = () =>{
        setTime(time - 300);
    };   

    const handleToggleWork = () =>{
        setIsWorkPeriod(true);
        setTime(WORK_TIME);
        setIsActive(false);
    };

    const handleToggleBreak = () =>{
        setIsWorkPeriod(false);
        setTime(REST_TIME);
        setIsActive(false);
    };
    
    return(
        <div className="pomodoroWidget">
            {/* Timer Selection */}
            <div className="selector">
                <button className={isWorkPeriod == true?"active":""}onClick={handleToggleWork}>Work</button>
                <button className={isWorkPeriod == false?"active":""} onClick={handleToggleBreak}>Break</button>
            </div>

            <div className="timer">
                <div className="circle">
                    <div className="time">
                        <span className="minutes">{formatTime(time)}</span>
                    </div>
                </div>
            </div>

            <div className="controls">
                <img src={startImage} className="start" onClick={handleStart}/>
                <img src={stopImage} className="stop" onClick={handleStop}/>
                <img src={resetImage} className="reset" onClick={handleReset}/>
            </div>
            <br>
            </br>
            {/* Timer Duration Controls */}
            <div className="duration-controls">
                <button className="increaseTime" onClick={handleIncrease}>+5 mins</button>
                <button className="reduceTime" onClick={handleDecrease}>-5 mins</button>
            </div>
        </div>
    )
}

export default PomodoroWidget;