import React, { useState, useEffect } from 'react';
import { Drawer, Box, Typography, Button, Divider } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/Help';

export default function HelpDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Reusable toggle functions
  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // 1. Press 'h' or 'H' to toggle the drawer open/closed
      if (event.key === 'h' || event.key === 'H' || event.key === '?') { 
        event.preventDefault();
        toggleDrawer();
      }

      // 2. Press 'Escape' to explicitly close it if it's open
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        closeDrawer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]); // Re-bind when isOpen changes so the escape condition checks the latest state
  return (
    <>
<Button
  variant="contained"           // Change to 'contained' if your other buttons are solid
  color="primary"              // Retain original primary color theme
  onClick={() => setIsOpen(true)}
  size="medium"                // Set this to match your adjacent buttons (small, medium, large)
  sx={{
    // Optional: add textTransform: 'none' if you prefer sentence-case labels
    // textTransform: 'none',
    // This button will now have the exact same height and border-radius as your play/pause controls.
  }}
><HelpOutlineIcon /></Button>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 320, p: 3, role: 'presentation' }}>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Quick Timer v1.0: Help & Shortcuts
          </Typography>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="subtitle1" fontWeight="bold">Keyboard Shortcuts:</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            • <strong>s:</strong> Start / Pause<br/>
            • <strong>r:</strong> Reset Timer<br/>
            • <strong>m:</strong> Toggle Messages<br/>
            • <strong>1:</strong> Set to 5 minutes<br/>
            • <strong>2:</strong> Set to 10 minutes<br/>
            • <strong>3:</strong> Set to 15 minutes<br/>
            • <strong>4:</strong> Set to 20 minutes<br/>
            • <strong>5:</strong> Set to 25 minutes<br/>
            • <strong>6:</strong> Set to 30 minutes<br/>
            • <strong>0:</strong> Set to 0<br/>
            • <strong>←</strong> 10 second decrement<br/>
            • <strong>→</strong> 10 second increment<br/>
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">Credits:</Typography>
          <Typography variant="body2" color="text.secondary">
            Written by Carl Limsico<br/>
            Built with React & Material UI. Audio assets by Windchime Sounds.
          </Typography>

          <Button 
            variant="outlined" 
            fullWidth 
            onClick={() => setIsOpen(false)} 
            sx={{ mt: 4 }}
          >
            Close Help
          </Button>
        </Box>
      </Drawer>
    </>
  );
}