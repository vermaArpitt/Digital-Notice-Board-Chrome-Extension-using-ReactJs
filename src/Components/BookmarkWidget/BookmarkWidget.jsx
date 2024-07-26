import React from "react";
import './BookmarkWidget.css';
import gmail_icon from '../../assets/icons8-gmail.svg';
import gmeet_icon from '../../assets/google-meet-svgrepo-com.svg';
import docs_icon from '../../assets/google-docs-icon-2.svg';
import keep_icon from '../../assets/google-keep-icon.svg';
import sheets_icon from '../../assets/google-sheets-icon.svg';
import slides_icon from '../../assets/google-slides-icon.svg';
import translate_icon from '../../assets/google-translate-icon.svg';

const BookmarkWidget = () =>
{
    return(
        <div className="bookmarkWidget">
            <a href="https://www.google.com/intl/en_in/gmail/about/" className="gmailLink"><img src={gmail_icon} alt="Gmail" />Gmail</a>
            <a href="https://meet.google.com/landing" className="meetLink"><img src={gmeet_icon} alt="G Meet" />Meet</a>
            <a href="https://www.google.com/docs/about/" className="docsLink"><img src={docs_icon} alt="Docs" />Docs</a>
            {/* <a href="https://keep.google.com/" className="keepLink"><img src={keep_icon} alt="Keep" />Keep</a> */}
            <a href="https://workspace.google.com/intl/en_in/products/sheets/" className="sheetsLink"><img src={sheets_icon} alt="Sheets" />Sheets</a>
            <a href="https://workspace.google.com/intl/en_in/products/slides/" className="slidesLink"><img src={slides_icon} alt="Slides" />Slides</a>
            {/* <a href="https://translate.google.co.in/?sl=auto&tl=en&op=translate" className="translateLink"><img src={translate_icon} alt="Translate" />Translate</a> */}
        </div>
    )
}

export default BookmarkWidget;