const intervalId = setInterval(() => {
    console.log("Repeating...");
  }, 1000);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped!");
  }, 5000); // stops after 5 seconds
  