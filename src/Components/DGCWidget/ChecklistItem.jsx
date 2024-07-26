import React from 'react';
import './DGCWidget.css';

const ChecklistItem = ({ task, onToggleTask }) => {
  return (
    <div className='checklist-items'>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={onToggleTask} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </div>
  );
};

export default ChecklistItem;
