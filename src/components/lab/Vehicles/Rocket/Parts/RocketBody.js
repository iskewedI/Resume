import React from 'react';
import { Cylinder } from '@react-three/drei';

const RocketBody = ({ position, color, scale = 0.2 }) => {
  return (
    <Cylinder args={[5, 5, 25, 32]} position={position} scale={scale}>
      <meshStandardMaterial color={color} />
    </Cylinder>
  );
};

export default RocketBody;
