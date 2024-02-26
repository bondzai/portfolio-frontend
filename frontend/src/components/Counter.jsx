import React, { useEffect, useState } from "react";

const Counter = () => {
  const [age, setAge] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const startTime = new Date("2023-12-01T00:00:00");
    const intervalId = setInterval(() => {
      const now = new Date();
      const diffInMs = now - startTime;

      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      setAge({ days, hours, minutes, seconds });

      if (initializing) {
        // Smooth animation during initialization only
        setInitializing(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initializing]); // Re-run useEffect on changes to initializing state

  // Function for smooth animation
  const handleAnimation = () => {
    const animationDuration = 2000; // Customize animation duration in milliseconds
    const steps = 20; // Number of animation steps
    const increment = age.seconds / steps;

    let currentSeconds = 0;
    const interval = setInterval(() => {
      if (currentSeconds >= age.seconds) {
        clearInterval(interval);
        return;
      }

      currentSeconds += increment;
      setAge({ ...age, seconds: Math.floor(currentSeconds) }); // Update state smoothly
    }, animationDuration / steps);
  };

  useEffect(() => {
    if (!initializing) {
      handleAnimation(); // Trigger animation after initialization
    }
  }, [initializing]); // Re-run useEffect on changes to initializing state

  return (
    <div className="App">
      {age.days !== 0 || age.hours !== 0 || age.minutes !== 0 || age.seconds !== 0 ? (
        <p>
          This website is {age.days} days, {age.hours} hours, {age.minutes} minutes, and {age.seconds} seconds old.
        </p>
      ) : (
        <p>Calculating website age...</p>
      )}
    </div>
  );
}

export default Counter;
