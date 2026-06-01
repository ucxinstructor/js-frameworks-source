import { useState, useEffect } from 'react';

const TIME_OPTIONS = {
  hour: '2-digit', // Prevents visual text jumping
  minute: '2-digit',
  hourCycle: 'h23' // Guarantees 24-hour format
};

export default function TimeDisplay() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Only format the exact string you intend to display.
  const formattedTime = now.toLocaleTimeString('en-US', TIME_OPTIONS);

  return (
    <div className="time-display">{formattedTime}</div>
  );
}

