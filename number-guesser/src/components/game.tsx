// src/components/Game.tsx
import React, { useEffect, useState } from 'react';
import { generateSecret, validateGuess, Difficulty, difficultyAttempts } from '../utils/game';
import './game.css'; //external CSS file

type Result = 'idle' | 'too-high' | 'too-low' | 'correct' | 'lost';

export default function Game() {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [secret, setSecret] = useState<number>(() => generateSecret());
  const [attemptsLeft, setAttemptsLeft] = useState<number>(difficultyAttempts[difficulty]);
  const [guessInput, setGuessInput] = useState('');
  const [message, setMessage] = useState<string>('Make your first guess!');
  const [result, setResult] = useState<Result>('idle');
  const [history, setHistory] = useState<number[]>([]);
  const [shake, setShake] = useState(false);

  // when difficulty changes, reset attempts and game
  useEffect(() => {
    resetGame(difficulty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  function resetGame(d = difficulty) {
    const newSecret = generateSecret();
    setSecret(newSecret);
    setAttemptsLeft(difficultyAttempts[d]);
    setGuessInput('');
    setMessage('New game started! Good luck.');
    setResult('idle');
    setHistory([]);
  }

  function handleGuessSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    // validate
    const v = validateGuess(guessInput);
    if (!v.ok) {
      setMessage(
        v.reason === 'not-a-number' ? 'Please enter a number.' :
        v.reason === 'not-integer' ? 'Please enter an integer (no decimals).' :
        'Enter a number between 1 and 100.'
      );
      flashShake();
      return;
    }
    const n = v.value!;
    // already finished?
    if (result === 'correct' || result === 'lost') return;
    setHistory(prev => [n, ...prev]);
    if (n === secret) {
      setResult('correct');
      setMessage(`🎉 Correct! The secret was ${secret}. You win!`);
      return;
    }

    const newAttempts = attemptsLeft - 1;
    setAttemptsLeft(newAttempts);

    if (n > secret) {
      setMessage('Too high!');
      setResult('too-high');
    } else {
      setMessage('Too low!');
      setResult('too-low');
    }

    if (newAttempts <= 0) {
      setResult('lost');
      setMessage(`💥 You lost. The number was ${secret}. Try again!`);
    }
  }

  function flashShake() {
    setShake(true);
    setTimeout(()=>setShake(false), 350);
  }

  const canGuess = result !== 'correct' && result !== 'lost' && attemptsLeft > 0;

  return (
    <div className="game-container">
      <h1>Number Guesser</h1>

      <div className="controls">
        <label>
          Difficulty:
          <select value={difficulty} onChange={e=>setDifficulty(e.target.value as Difficulty)}>
            <option value="easy">Easy (10 attempts)</option>
            <option value="medium">Medium (7 attempts)</option>
            <option value="hard">Hard (5 attempts)</option>
          </select>
        </label>

        <button onClick={()=>resetGame(difficulty)}>Restart</button>
      </div>

      <p className={`message ${shake ? 'shake' : ''}`}>{message}</p>

      <form onSubmit={handleGuessSubmit} className="guess-form">
        <input
          type="number"
          min={1}
          max={100}
          value={guessInput}
          onChange={(e)=>setGuessInput(e.target.value)}
          placeholder="Enter a number 1-100"
          disabled={!canGuess}
        />
        <button type="submit" disabled={!canGuess}>Guess</button>
      </form>

      <div className="status">
        <p>Attempts left: <strong>{attemptsLeft}</strong></p>
        <p>Guesses made: <strong>{history.length}</strong></p>
      </div>

      <div className="history">
        <h3>Guess History</h3>
        {history.length === 0 ? <p>No guesses yet.</p> :
          <ul>
            {history.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        }
      </div>
    </div>
  );
}
