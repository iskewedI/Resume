import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Rope_Texture from '../../misc/img/Rope_Texture.jpg';
import Normal_Texture from '../../misc/img/Normal_Texture.png';

const Rope = ({ position, onDrag }) => {
  const [ropeAttrs, setRopeAttrs] = useState({
    dragStartPosition: { mouseX: 0, mouseY: 0 },
    position,
  });

  const mesh = useRef();
  const [ropeMap, normalMap] = useLoader(TextureLoader, [Rope_Texture, Normal_Texture]);

  const getMousePosition = e => {
    if (!e) e = window.event; // works on IE, but not NS (we rely on NS passing us the event)

    let mouseX;
    let mouseY;

    if (e) {
      if (e.pageX || e.pageY) {
        // this doesn't work on IE6!! (works on FF,Moz,Opera7)
        mouseX = e.pageX;
        mouseY = e.pageY;
      } else if (e.clientX || e.clientY) {
        // works on IE6,FF,Moz,Opera7
        mouseX = e.clientX + document.body.scrollLeft;
        mouseY = e.clientY + document.body.scrollTop;
      }
    }

    return { mouseX, mouseY };
  };

  const handleDragEnter = evt => {
    setRopeAttrs(attrs => ({ ...attrs, dragStartPosition: getMousePosition() }));
  };

  return (
    <div draggable={true} onDragEnter={handleDragEnter}>
      <mesh position={ropeAttrs.position} ref={mesh} scale={0.5}>
        <boxGeometry args={[10, 2, 1]} />
        <meshStandardMaterial map={ropeMap} normalMap={normalMap} />
      </mesh>
    </div>
  );
};

export default Rope;
