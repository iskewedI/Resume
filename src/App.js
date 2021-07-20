import React, { useState, Suspense } from 'react';
// import { Fade } from 'react-reveal';
// import UnstableButton from './components/lab/UnstableButton';
// import BlurryFade from './components/lab/BlurryFade';
// import ReactImage from './misc/img/ReactLogo.png';
// import { Canvas } from '@react-three/fiber';
// import Rope from './components/lab/Rope';
// import Loading from './components/global/Loading';
// import MainScene from './components/scene/MainScene';

import ProjectList from './components/lab/ProjectsList';
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
      {/* <Suspense fallback={<Loading />}>
        <Canvas>
          <MainScene />
        </Canvas>
      </Suspense> */}

      <div style={{ textAlign: 'center' }}>
        <ProjectList />
      </div>

      {/* <ProjectGlance
        image='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        tooltip='Tooltip'
        name='Project Example'
        description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. '
      /> */}

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
