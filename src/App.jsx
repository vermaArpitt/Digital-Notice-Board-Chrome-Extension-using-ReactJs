import React from "react";
import './App.css';
import ScrollingAnnouncement from './Components/ScrollingAnnouncement/ScrollingAnnouncement';
import SlidesWidget from './Components/SlidesWidget/SlidesWidget';
import PomodoroWidget from "./Components/PomodoroWidget/PomodoroWidget";

const App = () =>
{
  return(
    <div className="App">
      <div className="widgets">
        <SlidesWidget/>
        <PomodoroWidget/>
      </div>
      <ScrollingAnnouncement/>
    </div>
  )
}

export default App;