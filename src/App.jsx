import React, {useState} from "react";
import './App.css';
import SlidesWidget from './Components/SlidesWidget/SlidesWidget';
import PomodoroWidget from "./Components/PomodoroWidget/PomodoroWidget";
import CalendarWidget from './Components/CalendarWidget/CalendarWidget';
import TILWidget from "./Components/TILWidget/TILWidget";
import DGCWidget from "./Components/DGCWidget/DGCWidget";
import BookmarkWidget from "./Components/BookmarkWidget/BookmarkWidget";

const App = () =>
{
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Read a book', completed: false },
    { id: 2, text: 'Exercise for 30 minutes', completed: false },
    { id: 3, text: 'Learn something new', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return(
    <div className="App">
      <div className="widgets">
        <SlidesWidget/>
        <PomodoroWidget/>
        <div className="side-widgets">
          <TILWidget/>
          <DGCWidget tasks={tasks} onToggleTask={toggleTaskCompletion}/>
        </div>
      </div>
      <div className="bottomWidgets">
        <BookmarkWidget/>
      </div>
    </div>
  )
}

export default App;