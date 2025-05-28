import { useState, useEffect, useRef } from 'react';

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    function step(timestamp: number) {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;

      const progressPercent = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercent * target));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);

    return () => {
      startTimestamp.current = null;
    };
  }, [target, duration]);

  return count;
}
