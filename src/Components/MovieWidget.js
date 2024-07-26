// src/MovieWidget.js
import React, { useState } from 'react';

const MovieWidget = () => {
  const [movies, setMovies] = useState([
    { title: "Despicable Me 4", releaseDate: "July 4" },
    { title: "Joker", releaseDate: "October 4" },
    { title: "Munjya", releaseDate: "June 7" },
    { title: "A Quiet Place Day One", releaseDate: "June" },
    { title: "Inside Out 2", releaseDate: "June 14" },
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

export default MovieWidget;
