import React from 'react';
import Game from './components/game.tsx';   // ✅ import your game component
import './App.css';                     // ✅ keep this if you want basic app styles


function App() {
  return (
    <div className="app-root">
      <Game />  {/* ✅ renders the Number Guesser game */}
      <footer style={{ textAlign: 'center', marginTop: 12 }}>
        <small>Built with ❤️ — Number Guesser (1–100)</small>
      </footer>
    </div>
  );
}


export default App;




