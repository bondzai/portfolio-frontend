import React, { useEffect, useState } from "react";

const Counter = () => {
    const [age, setAge] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        const startTime = new Date("2022-10-23T00:00:00");
        const intervalId = setInterval(() => {
        const now = new Date();
        const diffInMs = now - startTime;

        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

        setAge({ days, hours, minutes, seconds });

        if (initializing) {
            setInitializing(false);
        }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [initializing]);

    const handleAnimation = () => {
        const animationDuration = 1000;
        const steps = 20;
        const increment = age.seconds / steps;

        let currentSeconds = 0;
        const interval = setInterval(() => {
        if (currentSeconds >= age.seconds) {
            clearInterval(interval);
            return;
        }

        currentSeconds += increment;
        setAge({ ...age, seconds: Math.floor(currentSeconds) });
        }, animationDuration / steps);
    };

    useEffect(() => {
        if (!initializing) {
            handleAnimation();
        }
    }, [initializing]);

    return (
        <div className="Counter">
            {age.days !== 0 || age.hours !== 0 || age.minutes !== 0 || age.seconds !== 0 ? (
                <p>
                    &copy; JB, Publised {age.days}d {age.hours}h {age.minutes}m {age.seconds}s ago.
                </p>
            ) : (
                <p>
                    &copy; JB, Calculating website age...
                </p>
            )}
        </div>
    );
}

export default Counter;
