import { useHelper } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { AxesHelper, Object3D, SpotLightHelper } from 'three';
import GeometryLoading from '../global/GeometryLoading';
import Moon from '../lab/Moon';
import CameraControls from './CameraControls';

const MainScene = () => {
  const spotLightRef = useRef();
  const lightGroupRef = useRef();

  useFrame(({ clock }) => {
    // lightGroupRef.current.position.x += 0.1;
  });

  useHelper(spotLightRef, SpotLightHelper, 0.5, 'hotpink');

  return (
    <>
      {/* <ambientLight intensity={0.2} /> */}

      <spotLight
        ref={spotLightRef}
        position={[0, -15, 0]}
        distance={350}
        scale={0.2}
        angle={0.3}
      />
      <CameraControls positionX={0} positionY={0} positionZ={10} enableZoom={true} />
      <Suspense fallback={<GeometryLoading />}>
        <Moon position={[10, 0, 0]} />
      </Suspense>
      <gridHelper />
    </>
  );
};

export default MainScene;
