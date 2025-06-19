import { useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function AboutBox({ children }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = animate(
      scope.current,
      {
        background: [
            'linear-gradient(135deg, #0a3557, #00c9a7)',
            'linear-gradient(135deg, #1e61ff, #007f73)',
          ],          
      },
      {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div ref={scope} className="animated-about-box">
      {children}
    </div>
  );
}
