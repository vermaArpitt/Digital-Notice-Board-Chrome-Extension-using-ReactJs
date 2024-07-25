import React from 'react';

const ChecklistItem = ({ task, onToggleTask }) => {
  return (
    <div>
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
