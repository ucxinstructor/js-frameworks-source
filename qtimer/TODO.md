TODO

* Cleanup code
* Display version number and build date somewhere

FUTURE

* Layout/Size variety (size toogles up to full screen?)
* Make gadget friendly for MacOS?

DONE

* make entire screen movable
* Fix component sizes
* Put close button
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

- Running → show Pause.
- Paused with time remaining → show Play.
- Finished at zero → show Play, but action = Restart from full duration.


## Implementation model

- `running` + play/space → pause.
- `paused` + play/space → resume.
- `finished` + play/space → reset to initial duration and start.
- Optional separate reset button → reset to initial duration and stop.

## Small UX note

- At zero: `isRunning = false`
- At zero: play button shows Play
- At zero + Space/click Play: reset to initial time and start

