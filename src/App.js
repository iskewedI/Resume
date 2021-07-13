import React, { useState, Suspense } from 'react';
import { Fade } from 'react-reveal';
import UnstableButton from './components/lab/UnstableButton';
import './App.css';
import BlurryFade from './components/lab/BlurryFade';

import ReactImage from './misc/img/ReactLogo.png';
import Moon from './components/lab/Moon';
import { Canvas } from '@react-three/fiber';
import Rope from './components/lab/Rope';

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
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Moon position={[1.2, 0, 0]} />
          {/* <Rope /> */}
        </Suspense>
      </Canvas>
      {/* <UnstableButton onClick={handleStart}>
        <BlurryFade duration={0.7} type='ease-in-out' initialBlur={15} start={started}>
          <div style={{ backgroundColor: '#333', width: '100%', height: '100%' }}>
            Prueba
            <img src={ReactImage} />
          </div>
        </BlurryFade>
      </UnstableButton> */}
    </div>
  );
}

export default App;
