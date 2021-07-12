import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import UnstableButton from './components/lab/UnstableButton';
import './App.css';
import BlurryFade from './components/lab/BlurryFade';

import ReactImage from './misc/img/ReactLogo.png';

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
          <BlurryFade durationMS={700} type='ease-in-out'>
            <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
              Prueba
              <img src={ReactImage} />
            </div>
          </BlurryFade>
        )}
      </UnstableButton>
    </div>
  );
}

export default App;
