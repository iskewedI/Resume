import React, { useState, Suspense } from 'react';
import { Fade } from 'react-reveal';
import UnstableButton from './components/lab/UnstableButton';
import BlurryFade from './components/lab/BlurryFade';
import ReactImage from './misc/img/ReactLogo.png';
import { Canvas } from '@react-three/fiber';
import Rope from './components/lab/Rope';
import Loading from './components/global/Loading';
import MainScene from './components/scene/MainScene';

import './App.css';
function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => setStarted(true);

  return (
    <div
      className='App'
      style={{
        // display: 'grid',
        // gridTemplateColumns: 'repeat(3, 1fr)',
        height: '100vh',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#333',
      }}
    >
      <Suspense fallback={<Loading />}>
        <Canvas>
          <MainScene />
        </Canvas>
      </Suspense>

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
