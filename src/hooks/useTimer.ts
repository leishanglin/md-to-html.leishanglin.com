import { useEffect, useRef, useState, useCallback } from "react";

export const useTimer = (autoStart: boolean = false) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const timerIdRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (running) return;
    setRunning(true);
  }, [running]);

  const stop = useCallback(() => {
    if (!running) return;
    setRunning(false);
  }, [running]);

  const reset = useCallback(() => {
    setSeconds(0);
    setRunning(false);
  }, []);

  useEffect(() => {
    if (running) {
      timerIdRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }

    return () => {
      if (timerIdRef.current) {
        window.clearInterval(timerIdRef.current);
        timerIdRef.current = null;
      }
    };
  }, [running]);

  return {
    seconds,
    running,
    start,
    stop,
    reset,
  };
};
