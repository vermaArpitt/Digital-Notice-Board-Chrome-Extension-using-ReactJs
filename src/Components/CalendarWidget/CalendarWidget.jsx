import React from "react";
import './CalendarWidget.css';

const CalendarWidget = () =>
{
    return(
        <div className="calendarWidget">
            <iframe className="calendar-iframe" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTz=0&showCalendars=0&src=NjBmYWMyZTg0ZjA1YjUzYjU4NmNkMjg1ZTg4OGNmOTRiZWIxYWYzNzRjNmY1NmYwMTBjMmRmZDVhZGRjNTk0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161&color=%230B8043" style="border-width:0" width="400" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    )
}

export default CalendarWidget;