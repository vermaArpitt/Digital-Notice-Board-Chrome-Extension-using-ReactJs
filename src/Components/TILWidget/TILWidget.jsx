import React, { useState } from 'react';
import './TILWidget.css';

const TILWidget = () => {
  const [tilEntries, setTilEntries] = useState([]);
  const [inputContent, setInputContent] = useState('');
  const [isEntryAdded, setIsEntryAdded] = useState(false);

  const handleAddEntry = () => {
    if (inputContent.trim()) {
      const newEntry = {
        content: inputContent,
        date: new Date().toLocaleDateString(),
      };
      setTilEntries([...tilEntries, newEntry]);
      setInputContent('');
      setIsEntryAdded(true);
    }
  };

  return (
    <div className="til-widget">
      <h1>Today I Learned (TIL)</h1>
      {!isEntryAdded && (
        <div className="til-input">
          <textarea
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            placeholder="What did you learn today?"
          ></textarea>
          <button onClick={handleAddEntry}>Add</button>
        </div>
      )}
      <div className="til-entries">
        {tilEntries.map((entry, index) => (
          <div key={index} className="til-entry">
            <p>{entry.content}</p>
            <small>{entry.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TILWidget;
