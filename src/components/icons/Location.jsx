import React, { useState } from 'react';

const LocationComponent = () => {
    const [location, setLocation] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                error => {
                    console.error("Error getting user's location:", error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        };
    };

    return (
        <div>
            {location ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : (
                <button onClick={getLocation}>Get Location</button>
            )}
        </div>
    );
    };

export default LocationComponent;
