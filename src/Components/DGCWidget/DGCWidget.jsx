import React from "react";
import ChecklistItem from './ChecklistItem';
import './DGCWidget.css';

const DGCWidget = ({ tasks, onToggleTask }) =>
{
    return(
        <div className="dgc">
            <h2>Daily Growth Checklist</h2>
            {tasks.map(task => (
            <ChecklistItem 
            key={task.id} 
            task={task} 
            onToggleTask={() => onToggleTask(task.id)} 
            />
      ))}
        </div>
    )
}

export default DGCWidget;