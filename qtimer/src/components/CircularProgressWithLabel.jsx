import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TimerDisplay from './TimerDisplay.jsx';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimeDisplay from './TimeDisplay';
import { keyframes } from '@mui/system';

const flash = keyframes`
  0%, 100% {
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.35);
    transform: scale(1.08);
  }
`;

export default function CircularWithValueLabel({ value = 0, max = 100, isRunning = false, shouldFlash = false, ...rest }) {
  const isExpired = max > 0 && value <= 0;
  const isPaused = !isRunning && value > 0 && value < max;
  const isIdle = !isRunning && value === max;
  const status = isExpired ? 'expired' : isPaused ? 'paused' : 'idle';
  const remain = Math.max(0, max - value);

  const statusMeta = {
    expired: { message: "Time's Up!", color: '#D97706' },
    paused: { message: 'Paused', color: '#414a57' },
    idle: { message: '', color: 'inherit' },
  };

  const { message, color: messageColor } = statusMeta[status];

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        enableTrackSlot
        variant="determinate"
        value={remain}
        max={max}
        min={0}
        color={isIdle ? 'inherit' : isPaused ? 'warning' : 'primary'}
        {...rest}
        sx={{
          //          ...(!isIdle) && {color: 'primary.light'}, // Override color for paused and running states
          //          animation: shouldFlash ? `${flash} 0.35s ease-in-out 5` : 'none',
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          //          flexDirection: 'column', // <--- CHANGE 1: Stack items vertically
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TimerDisplay totalSeconds={value} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%', // Adjust this % to move it up or down
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <EndTimeDisplay remainSeconds={value} isRunning={isRunning} message={message} messageColor={messageColor} />
      </Box>
    </Box>
  );
}
//        animation: `${flashStrong} 0.5s ease-in-out 3`, // Strong flash for messages

export function EndTimeDisplay({ remainSeconds, isRunning, message, messageColor = '#64748B' }) {
  // prioritize message display (e.g., "Time's Up!" or "Paused") over the end time
  if (message) {
    return (
      <Box 
      component="div"
      sx={{
        color: messageColor,
        fontSize: '1.2rem',
        fontWeight: '600',
//        animation: message === "Time's Up!" ? `${flash} 1s ease-in-out infinite` : 'none',
        animation: `${flash} 1s ease-in-out infinite`,
        display: 'flex',
        textAlign: 'center',
      }}>
      {message} 
      </Box>
    );
  }

  // If the timer isn't running or finished, show nothing
  if (!isRunning || remainSeconds <= 0) return null;

  // Calculate the timestamp
  const endTimeMs = Date.now() + remainSeconds * 1000;
  const endDate = new Date(endTimeMs);

  // Format the time (e.g., "10:45 PM")
  const endTimeDisplay = endDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // This removes AM/PM
  });

  return (
    <div style={{
      color: '#888',
      fontSize: '1.2rem',
      fontWeight: '500',
    }}>
      {endTimeDisplay}
    </div>
  );
}

function endTimeString(remainSeconds) {
  // 1. Calculate the end time dynamically during render
  const getEndTimeString = () => {
    if (!isRunning || remainSeconds <= 0) return "";

    // Multiply remaining seconds by 1000 to get milliseconds
    const endTimeMs = Date.now() + remainSeconds * 1000;
    const endDate = new Date(endTimeMs);

    // Format it beautifully to the user's local clock (e.g., "10:45 AM")
    return endDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const endTimeDisplay = getEndTimeString();

  // 2. Clean UX layout in your return statement:
  return (
    <section id="center">
      <h1><TextToggle items={['Break', 'Exercise', 'Lab', 'Quiz']} /></h1>

      {/* The Main Countdown */}
      <TimerDisplay totalSeconds={remainSeconds} />

      {/* The Subdued End Time Display */}
      {isRunning && remainSeconds > 0 && (
        <div style={{ color: '#666', fontSize: '1.1rem', marginTop: '-10px', marginBottom: '20px' }}>
          Ends at {endTimeDisplay}
        </div>
      )}

      {/* ... rest of your UI controls ... */}
    </section>
  );
}
