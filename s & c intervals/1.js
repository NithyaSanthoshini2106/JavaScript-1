const intervalId = setInterval(() => {
    console.log("This runs every 2 seconds");
  }, 2000); // 2000 ms = 2 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }, 7000); // Stops after 7 seconds
    