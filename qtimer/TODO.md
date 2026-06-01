TODO

* make entire screen movable
* Fix component sizes
* Put close button
* Cleanup code
```
return (
  // This div now acts as the "handlebar" for the whole app
  <div className="app-container" data-tauri-drag-region>
    
    {/* You might want a small close button in the top right since the bar is gone */}
    <button 
      onClick={() => window.__TAURI__.window.getCurrent().close()}
      style={{ position: 'absolute', top: 10, right: 10 }}
    >
      ✕
    </button>

    <div className="left-panel">...</div>
    <div className="right-panel">...</div>
  </div>
);
```

FUTURE

* Layout/Size variety
* Preset Menu popup

DONE
* Make executable
* Add icons
* Default to 5 minutes
* Current time positioning
* ugly finishing anim at the end
* End time size
* Color code running and non-running timer (running color="primary", pasued color="warning", stopped="disabled")
* Add code to show/hide end time (if running, show, otherwise hide)
* Red is ugly
* When timer has expired (zero) and spacebar is pressed, reset and start again
  * if play is pressed, reset and play again
* When timer is zero, set play button to play?
* make end time larger font
* don't show end time when not running
*  Put timer messages in the right position
*  Remove pause display when timer reaches zero
* Improve positioning of help icon
* Credits display
* Help display
* Layout fix
* alarm end time
* visual alarm (somewhat finished)
* message menu
* message menu toggle



## Play button state

Yes, when the timer is zero, the play button should visually be in the **play** state, not pause. Zero means playback is no longer in progress, so showing pause would imply something is still running, which is misleading. A good mental model is:[1]

- Running → show Pause.
- Paused with time remaining → show Play.
- Finished at zero → show Play, but action = Restart from full duration.

## Keyboard behavior

Spacebar restarting from zero is a strong choice because it preserves the same “primary control” behavior across states. Users can think of Space as “do the obvious next thing”: pause if running, resume if paused, restart if finished.[1]

## Implementation model

I’d model the timer with an explicit status such as `idle`, `running`, `paused`, and `finished`. Then your main button logic becomes clearer:

- `running` + play/space → pause.
- `paused` + play/space → resume.
- `finished` + play/space → reset to initial duration and start.
- Optional separate reset button → reset to initial duration and stop.

## Small UX note

If the timer hits zero, it can help to briefly indicate completion with a label like “Done” or “Finished,” while still switching the control icon to Play. That gives users feedback about what happened without making the next action ambiguous.[1]

A concise rule set would be:

- At zero: `isRunning = false`
- At zero: play button shows Play
- At zero + Space/click Play: reset to initial time and start

