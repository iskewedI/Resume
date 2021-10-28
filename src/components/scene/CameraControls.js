import React, { useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = ({
  enableZoom = false,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
}) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.position.x = positionX;
  camera.position.y = positionY;
  camera.position.z = positionZ;

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();

  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={enableZoom}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};

export default CameraControls;
