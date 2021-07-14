import { useHelper } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { AxesHelper, SpotLightHelper } from 'three';
import GeometryLoading from '../global/GeometryLoading';
import Moon from '../lab/Moon';
import CameraControls from './CameraControls';

const MainScene = () => {
  const spotLightRef = useRef();
  const lightGroupRef = useRef();
  const axesHelperRef = useRef();

  useFrame(({ clock }) => {
    lightGroupRef.current.rotation.x = 1.6;
    spotLightRef.current.position.x = 1;
  });

  useHelper(spotLightRef, SpotLightHelper, 0.5, 'hotpink');
  useHelper(AxesHelper, 0.5, 'hotpink');

  return (
    <>
      <group ref={lightGroupRef}>
        {/* MOVER EN EL EJE X DEL SPOTLIGHT */}
        <spotLight scale={0.1} distance={10} ref={spotLightRef} intensity={4.16} />
      </group>
      <axesHelper ref={axesHelperRef} />
      <CameraControls positionX={0} positionY={0} positionZ={10} />
      <Suspense fallback={<GeometryLoading />}>
        <Moon position={[5, 0, 0]} />
      </Suspense>
      <gridHelper />
    </>
  );
};

export default MainScene;
