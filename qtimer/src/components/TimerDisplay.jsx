import { useState, useEffect } from 'react';

export default function TimerDisplay({ totalSeconds = 0 }) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = 
    minutes.toString().padStart(2, '0') + ":" + 
    seconds.toString().padStart(2, '0');

  return <span style={{ fontSize: '3rem', fontFamily: 'monospace' }}>{formattedTime}</span>;
}
