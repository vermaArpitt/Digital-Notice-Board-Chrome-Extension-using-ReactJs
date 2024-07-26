import React, { useState } from 'react';
import './PollWidget.css'; // We'll create this for styling

const PollWidget = () => {
  const [pollStarted, setPollStarted] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [votes, setVotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption !== null) {
      const newVotes = [...votes];
      newVotes[selectedOption]++;
      setVotes(newVotes);
      setVoted(true);
    }
  };

  const startPoll = () => {
    setVotes(new Array(options.length).fill(0));
    setPollStarted(true);
  };

  const addOption = () => {
    if (newOption.trim() !== '') {
      setOptions([...options, newOption]);
      setNewOption('');
    }
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="poll-widget">
      {!pollStarted ? (
        <div>
          <h3>Create Poll</h3>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="Enter your question" 
            style={{ padding: '10px', width: 'calc(100% - 22px)', marginBottom: '10px' }} 
          />
          <div>
            <input 
              type="text" 
              value={newOption} 
              onChange={(e) => setNewOption(e.target.value)} 
              placeholder="Enter option" 
              style={{ padding: '10px', width: 'calc(100% - 22px)', marginBottom: '10px' }} 
            />
            <button onClick={addOption} className="add-option-button">Add Option</button>
          </div>
          <ul>
            {options.map((option, index) => (
              <li key={index} style={{ padding: '10px', background: '#f4f4f4', marginBottom: '5px', borderRadius: '5px' }}>
                {option}
              </li>
            ))}
          </ul>
          <button onClick={startPoll} className="start-poll-button" disabled={!question || options.length < 2}>Start Poll</button>
        </div>
      ) : (
        !voted ? (
          <div>
            <h3>{question}</h3>
            {options.map((option, index) => (
              <div key={index} className="option">
                <input 
                  type="radio" 
                  name="option" 
                  value={index} 
                  onChange={() => handleOptionChange(index)} 
                />
                <label>{option}</label>
              </div>
            ))}
            <button onClick={handleVote} className="vote-button">Vote</button>
          </div>
        ) : (
          <div>
            <h3>Poll - {question}</h3>
            {options.map((option, index) => (
              <div key={index} className="result-option">
                <span>{option}</span>
                <span>{((votes[index] / votes.reduce((a, b) => a + b, 0)) * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default PollWidget;
