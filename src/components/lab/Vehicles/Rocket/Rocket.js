import { Circle, Ring } from '@react-three/drei';
import React from 'react';

import RocketBody from './Parts/RocketBody';
import RocketHead from './Parts/RocketHead';

const Rocket = ({ position }) => {
  return (
    <mesh position={position}>
      <RocketHead position={[0, 4, 0]} color='grey' />
      <RocketBody position={[0, 0, 0]} color='white' />
      <Ring args={[0.15, 0.3, 16]} position={[0, 1, 1]}>
        <meshStandardMaterial color='blue' />
      </Ring>
    </mesh>
  );
};

export default Rocket;
