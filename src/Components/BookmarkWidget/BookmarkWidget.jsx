import React from "react";
import './BookmarkWidget.css';
import gmeet_icon from '../../assets/google-meet-svgrepo-com.svg';
import docs_icon from '../../assets/google-docs-icon-2.svg';
import keep_icon from '../../assets/google-keep-icon.svg';

const BookmarkWidget = () =>
{
    return(
        <div className="bookmarkWidget">
            <a href="https://meet.google.com/landing" className="meetLink"><img src={gmeet_icon} alt="G Meet" />Meet</a>
            <a href="https://www.google.com/docs/about/" className="docsLink"><img src={docs_icon} alt="Docs" />Docs</a>
            <a href="https://keep.google.com/" className="keepLink"><img src={keep_icon} alt="Keep" />Keep</a>
        </div>
    )
}

export default BookmarkWidget;