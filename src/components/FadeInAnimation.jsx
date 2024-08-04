import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const FadeInAnimation = ({ children }) => {
  const { y, rotation } = useSpring({
    to: async (next) => {
      while (true) {
        await next({ y: -20, rotation: 180 }); // 向上跳并进行Z轴旋转
        await next({ y: 0, rotation: 360 }); // 回到原位并继续旋转
      }
    },
    from: { y: 0, rotation: 0 },
    config: { tension: 200, friction: 10 },
  });

  return (
    <animated.div
      style={{
        transform: y.to((y) => `translateY(${y}px) rotate(${rotation}deg)`),
      }}
    >
      {children}
    </animated.div>
  );
};

export default FadeInAnimation;
