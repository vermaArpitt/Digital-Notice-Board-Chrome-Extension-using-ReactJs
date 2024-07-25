import React, { useState } from 'react';
import './App.css';
import Checklist from './Checklist';

function App() {
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

  return (
    <div className="widget">
      <h2>Daily Growth Checklist</h2>
      <Checklist tasks={tasks} onToggleTask={toggleTaskCompletion} />
    </div>
  );
}

export default App;
