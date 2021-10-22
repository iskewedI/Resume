import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Moon_Texture from '../../misc/img/Moon_Texture.jpg';
import Normal_Texture from '../../misc/img/Normal_Texture.png';

const Moon = ({ position }) => {
  const mesh = useRef();

  const [moonMap, normalMap] = useLoader(TextureLoader, [Moon_Texture, Normal_Texture]);

  useFrame(() => (mesh.current.rotation.y += 0.002));

  return (
    <mesh ref={mesh} scale={3} position={position}>
      <sphereGeometry args={[3, 32, 32]} rotateZ={20} />
      <meshStandardMaterial map={moonMap} normalMap={normalMap} />
    </mesh>
  );
};

export default Moon;
