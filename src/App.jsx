import React from "react";
import ScrollingAnnouncement from './Components/ScrollingAnnouncement/ScrollingAnnouncement';
import SlidesWidget from './Components/SlidesWidget/SlidesWidget';

const App = () =>
{
  return(
    <div className="App">
      <ScrollingAnnouncement/>
      <SlidesWidget/>
    </div>
  )
}

export default App;