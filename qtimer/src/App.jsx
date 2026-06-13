import './App.css'
// 1. React & Third-Party Dependencies
import { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';

// 2. Internal Project Components
import CircularProgressWithLabel from './components/CircularProgressWithLabel.jsx';
import HelpDrawer from './components/HelpDrawer.jsx';
import MessageSelect from './components/MessageSelect.jsx';
import PlayButton from './components/PlayButton.jsx';
import TimeDisplay from './components/TimeDisplay.jsx';

// 3. Icons and Styling
import RestoreIcon from '@mui/icons-material/Restore';
import CloseIcon from '@mui/icons-material/Close';

// 4. Static Media Assets
import AlarmSound from './assets/alarm.mp3';

export default function App() {
  // We store the appWindow in state so it's only populated if we are in Tauri
  const [appWindow, setAppWindow] = useState(null);

  const defaultSeconds = 5 * 60; // Default to 5 minutes
  const [remainSeconds, setRemainSeconds] = useState(defaultSeconds);
  const [maxSeconds, setMaxSeconds] = useState(defaultSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [flashTimer, setFlashTimer] = useState(false);
  const audioRef = useRef(null);

  const messageItems = ['Break', 'Exercise', 'Lab', 'Quiz'];
  const [messageValue, setMessageValue] = useState(messageItems[0]);

  const playBuzzer = async () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0; // restart from beginning
    try {
      await audioRef.current.play();
    } catch (err) {
      // This log is crucial for modern browsers
      console.warn("Autoplay blocked or failed:", err);
    }
  };

  const handleStartToggle = () => {
    // Prime the audio! This tells the browser: 
    // "The user just pressed a key/button, prepare this audio file for later."
    if (audioRef.current) {
      audioRef.current.load();
    }

    // If we're currently expired and the user hits start, reset the timer to maxSeconds
    if (!isRunning && remainSeconds <= 0) {
      setRemainSeconds(maxSeconds);
    } else {
      // Flip the timer state
      setIsRunning(!isRunning);
    }
    setFlashTimer(false);
  };

  useShortcut('m', () => {
    setMessageValue((prevValue) => {
      const currentIndex = messageItems.indexOf(prevValue);
      const nextIndex = (currentIndex + 1) % messageItems.length;
      const nextValue = messageItems[nextIndex];
      return nextValue;
    });
  });
  useShortcut('s', () => {
    handleStartToggle();
  });
  useShortcut('r', () => {
    setRemainSeconds(maxSeconds);
    setIsRunning(false);
  });
  useShortcut('1', () => {
    setRemainSeconds(5 * 60);
    setMaxSeconds(5 * 60);
    setIsRunning(false);
  });
  useShortcut('2', () => {
    setRemainSeconds(10 * 60);
    setMaxSeconds(10 * 60);
    setIsRunning(false);
  });
  useShortcut('3', () => {
    setRemainSeconds(15 * 60);
    setMaxSeconds(15 * 60);
    setIsRunning(false);
  });
  useShortcut('4', () => {
    setRemainSeconds(20 * 60);
    setMaxSeconds(20 * 60);
    setIsRunning(false);
  });
  useShortcut('5', () => {
    setRemainSeconds(25 * 60);
    setMaxSeconds(25 * 60);
    setIsRunning(false);
  });
  useShortcut('6', () => {
    setRemainSeconds(30 * 60);
    setMaxSeconds(30 * 60);
    setIsRunning(false);
  });
  useShortcut('0', () => {
    setRemainSeconds(0);
    setMaxSeconds(0);
    setIsRunning(false);
  });
  useShortcut('-', () => {
    const seconds = Math.max(0, maxSeconds - 60);
    setMaxSeconds(seconds);
    setRemainSeconds(seconds);
    setIsRunning(false);
  });
  useShortcut('+', () => {
    const seconds = Math.min(60 * 60, maxSeconds + 60);
    setMaxSeconds(seconds);
    setRemainSeconds(seconds);
    setIsRunning(false);
  });
  useShortcut('ArrowLeft', () => {
    const seconds = Math.max(0, maxSeconds - 10);
    setMaxSeconds(seconds);
    setRemainSeconds(seconds);
    setIsRunning(false);
  });
  useShortcut('ArrowRight', () => {
    const seconds = Math.min(60 * 60, maxSeconds + 10);
    setMaxSeconds(seconds);
    setRemainSeconds(seconds);
    setIsRunning(false);
  });
  useEffect(() => {
    let interval = null;

    if (isRunning && remainSeconds > 0) {
      // Calculate exactly when this timer should hit zero
      const targetTime = Date.now() + remainSeconds * 1000;
      interval = setInterval(() => {
        const now = Date.now();
        // Calculate difference and round to the nearest second
        // const remaining = Math.round((targetTime - now) / 1000);
        const remaining = Math.ceil((targetTime - now) / 1000);
        if (remaining <= 0) {
          setRemainSeconds(0);
          setIsRunning(false);
          clearInterval(interval);
          setFlashTimer(true);
          playBuzzer();
        } else {
          setRemainSeconds(remaining);
        }
      }, 200); // Check every 200ms for high responsiveness
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainSeconds]); // Only re-run the effect if the user starts/stops the timer

  useEffect(() => {
    // Only try to load Tauri if we are actually running inside the desktop app
    if (window.__TAURI_INTERNALS__) {
      import('@tauri-apps/api/window').then((module) => {
        setAppWindow(module.getCurrentWindow());
      });
    }
  }, []);

  const handleClose = () => {
    if (appWindow) {
      appWindow.close();
    } else {
      console.log("Web mode: Close ignored.");
    }
  };

  return (
    <div className="app-container" data-tauri-drag-region>
      <Button
        onClick={handleClose}
        style={{
          position: 'absolute', top: 10, right: 10,
          cursor: 'pointer', zIndex: 9999,
          color: 'rgba(255, 255, 255, 0.5)', // Subtle white
          '&:hover': {
            backgroundColor: '#d32f2f', // Red hover
            color: 'white'
          }
        }}
      ><CloseIcon /></Button>

      {/* LEFT HALF */}
      <div className="left-panel">
        <CircularProgressWithLabel
          enableTrackSlot
          value={remainSeconds}
          size={250} // Made it larger for the left side
          isRunning={isRunning}
          max={maxSeconds}
          shouldFlash={flashTimer}
        />
      </div>

      {/* RIGHT HALF */}
      <div className="right-panel">
        <div className="controls-wrapper">
          {/* Top: Message Select */}
          <MessageSelect
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            items={messageItems}
          />

          {/* Middle: Time Display */}
          <div className="time-display-large">
            <TimeDisplay />
          </div>

          {/* Bottom: Row of Buttons */}
          <div className="button-row">
            <PlayButton
              isRunning={isRunning}
              onClick={handleStartToggle}
              variant="contained"
            />

            <Button variant="contained" onClick={() => {
              setRemainSeconds(maxSeconds);
              setIsRunning(false);
            }}>
              <RestoreIcon />
            </Button>

            <HelpDrawer />
          </div>
        </div>
        {/* Hidden Audio Element */}
        <audio ref={audioRef} src={AlarmSound} preload="auto" />
      </div>
    </div>
  );
}

function useShortcut(key, callback) {
  // Use a ref to store the latest version of the callback
  const callbackRef = useRef(callback);

  // Update the ref whenever the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handleKeyDown(event) {
      // Check for space specifically (event.key is " " for spacebar)
      // Also prevent page scrolling when space is pressed
      if (event.key === key) {
        if (key === ' ') event.preventDefault();
        callbackRef.current(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key]); // Now only depends on the key
}
