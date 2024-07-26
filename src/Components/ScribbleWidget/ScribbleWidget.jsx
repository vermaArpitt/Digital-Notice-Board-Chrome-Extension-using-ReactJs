import React, { useState } from 'react';
import './ScribbleWidget.css';

const ScribbleWidget = () => {
  const [movies, setMovies] = useState([
    { title: "Hyperverge Hackathon", releaseDate: "July 26" },
    { title: "Project 1", releaseDate: "October 4" },
    { title: "Project 3", releaseDate: "June 7" },
    { title: "Project 4", releaseDate: "June" },
    { title: "Notes 5", releaseDate: "June 14" },
  ]);

  const [note, setNote] = useState('');

  const addNote = () => {
    const newMovies = [...movies, { title: note}];
    setMovies(newMovies);
    setNote('');
  };

  return (
    <div className="widget-container">
      <h2>Scribble Notes</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title}
            <br />
            {movie.releaseDate}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Take a note..."
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default ScribbleWidget;
