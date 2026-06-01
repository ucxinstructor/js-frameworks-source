import IconButton from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayButton({ isRunning, ...props }) {
  return (
  <IconButton {...props}>
      {isRunning ? <PauseIcon /> : <PlayArrowIcon />}
  </IconButton>
  );
}



