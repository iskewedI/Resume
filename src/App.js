import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import UnstableButton from './components/lab/UnstableButton';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => setStarted(true);

  return (
    <div
      className='App'
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
      }}
    >
      <UnstableButton onClick={handleStart}>
        {started && (
          // <Fade>
          <div style={{ backgroundColor: 'white', width: '100%' }}>XD</div>
          // </Fade>
        )}
      </UnstableButton>
    </div>
  );
}

export default App;
