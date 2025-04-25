let count = 0;

// Start repeating function
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  // Stop after 5 times
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval cleared!");
  }
}, 1000); // Runs every 1 second
