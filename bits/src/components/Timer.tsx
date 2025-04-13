import { useEffect, useState } from "react";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    setSeconds(duration);
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 1) {
          clearInterval(interval);
          onTimeUp();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="text-sm text-gray-600">
      Time Left: <span className="font-bold">{seconds}s</span>
    </div>
  );
};

export default Timer;
