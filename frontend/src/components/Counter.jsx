import React, { useEffect, useState } from 'react';

function Counter() {
  const [age, setAge] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startTime = new Date('2023-12-01T00:00:00');
    const intervalId = setInterval(() => {
      const now = new Date();
      const diffInMs = now - startTime;

      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

      setAge({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
