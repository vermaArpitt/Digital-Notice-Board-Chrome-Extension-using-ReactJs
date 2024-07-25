import React, {useState} from "react";
import './SlidesWidget.css';

const SlidesWidget = () =>
{
    const [currentTime, setCurrentTime] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const UpdateTime = () =>
    {
        let now = new Date();
        let time = now.toTimeString().slice(0, 8); 
        setCurrentTime(time);
        setTimeZone(now.toTimeString().slice(8));
    }

    setTimeout(UpdateTime, 1000);
    return(
        <div className="slidesWidget">
            <div className="date-time">
                <span className="time">{currentTime}</span>
                <span className="time-zone">{timeZone}</span>
            </div>
            <div className="iframe-wrapper">
                <iframe className="slides-iframe" src="https://docs.google.com/presentation/d/e/2PACX-1vR2j9xR1FhEfiWSXWWRcehjwR0NjmlMMLh8940QXFFiK-y9RH5nRLswrUGpESpiMF0tpQXcAWSFVTI_/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </div>
    )
}

export default SlidesWidget;