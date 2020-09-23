let prevTimestamp = null;

function onAnimFrame(timestamp) {
  // Request another animation frame for the future
  requestAnimationFrame(onAnimFrame);

  // If we haven't yet stored the previous time, fake it
  if (prevTimestamp === null) {
    prevTimestamp = timestamp - 30; // milliseconds
  }

  // Compute how long it took between frames
  const elapsed = timestamp - prevTimestamp;

  // Remember this for next frame
  prevTimestamp = timestamp;

  console.log(`Current time: ${timestamp} ms, frame time: ${elapsed} ms`);

  // TODO: Do animation stuff to the canvas
}

// Request the first animation frame to kick things off
requestAnimationFrame(onAnimFrame);
