import { useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function ColorInterpolation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = animate(
      scope.current,
      {
        backgroundColor: ['#00d6b4', '#00977e'],
      },
      {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }
    );

    return () => animation.cancel();
  }, []);

  return <div ref={scope} className="background-animate"></div>;
}
