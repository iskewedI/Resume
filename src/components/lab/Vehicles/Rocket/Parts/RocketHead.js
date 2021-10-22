import { Cone } from '@react-three/drei';
import React from 'react';

const RocketHead = ({ color, position }) => {
  return (
    <Cone args={[1.3, 3, 8]} position={position}>
      <meshStandardMaterial color={color} />
    </Cone>
  );
};

export default RocketHead;
