import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const GeometryLoading = ({ color = '#66ffff' }) => {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.z += 0.5));

  return (
    <mesh ref={mesh} scale={0.2} position={[0, 0, 0]}>
      <torusGeometry args={[15, 1.5, 10, 100, 5]} />
      <meshBasicMaterial color={color} attach='material' />
    </mesh>
  );
};

export default GeometryLoading;
