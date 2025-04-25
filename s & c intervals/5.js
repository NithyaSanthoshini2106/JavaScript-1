let count = 0;

// Start interval
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  // Stop after 3 times
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 1000);
