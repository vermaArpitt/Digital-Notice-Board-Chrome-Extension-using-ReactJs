import React from 'react';
import ChecklistItem from './ChecklistItem';

const Checklist = ({ tasks, onToggleTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <ChecklistItem 
          key={task.id} 
          task={task} 
          onToggleTask={() => onToggleTask(task.id)} 
        />
      ))}
    </div>
  );
};

export default Checklist;
