import React from "react";
import './CalendarWidget.css';

const CalendarWidget = () =>
{
    return(
        <div className="calendarWidget">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=dmVybWEuYXJwaXQwMkBnbWFpbC5jb20&src=NjBmYWMyZTg0ZjA1YjUzYjU4NmNkMjg1ZTg4OGNmOTRiZWIxYWYzNzRjNmY1NmYwMTBjMmRmZDVhZGRjNTk0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA4NDI3OTM4MTczMjMyNjA4NTkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA4OTg5NjA1MDgwNTI0NDI4MzUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23616161&color=%237627bb&color=%2333B679&color=%230B8043&color=%237986CB&color=%23137333" style="border:solid 1px #777" width="400" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    )
}

export default CalendarWidget;