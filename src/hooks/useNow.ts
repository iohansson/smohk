import { useEffect, useState, useRef } from 'react';

export const useNow = () => {
  const [now, setNow] = useState(Date.now().valueOf());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(Date.now().valueOf());
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef]);

  return { now };
};
