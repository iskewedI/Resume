import React, { useState } from 'react';

const BlurryFade = ({
  children,
  duration = 1,
  initialBlur = 8,
  type = 'cubic-bezier(1, .04, .98, .73)',
  start = false,
}) => {
  const [blurEffect, setBlurEffect] = useState({
    amount: initialBlur,
    triggered: false,
  });

  if (start && !blurEffect.triggered) {
    setTimeout(() => setBlurEffect({ ...blurEffect, triggered: true, amount: 0 }), 15);
  }

  return (
    <div
      style={{
        filter: `blur(${blurEffect.amount}px)`,
        width: '100%',
        height: '100%',
        // TODO WEBKIT compatibility
        transition: `${duration}s filter ${type}`,
        WebkitTransition: `${duration}s -webkit-filter ${type}`,
        MozTransition: `${duration}s -moz-filter ${type}`,
        msTransition: `${duration}s -ms-filter ${type}`,
      }}
    >
      {children}
    </div>
  );
};

export default BlurryFade;
