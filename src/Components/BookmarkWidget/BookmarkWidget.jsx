import React from "react";
import './BookmarkWidget.css';
import gmeet_icon from '../../assets/google-meet-svgrepo-com.svg';

const BookmarkWidget = () =>
{
    return(
        <div className="bookmarkWidget">
            <a href="https://meet.google.com/landing" className="meetLink">Google Meet <img src={gmeet_icon} alt="" /></a>
        </div>
    )
}

export default BookmarkWidget;