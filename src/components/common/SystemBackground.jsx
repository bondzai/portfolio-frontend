import { useContext, useEffect, useState } from 'react';
import { SystemContext } from '../../contexts/SystemContext';
import useScreenDimensions from '../../hooks/useScreenDimensions';
import MatrixRain from '../effects/MatrixRain';
import Starfield from '../effects/Starfield';
import Snow from '../effects/Snow';
import Moonlight from '../effects/Moonlight';

const SystemBackground = () => {
    const { backgroundEffect, effectSpeed } = useContext(SystemContext);
    const { width, height } = useScreenDimensions();
    const [autoEffect, setAutoEffect] = useState('matrix');

    // Handle Auto Mode (Time-based for now)
    useEffect(() => {
        if (backgroundEffect === 'auto') {
            const updateAutoEffect = () => {
                const hour = new Date().getHours();
                const isNight = hour >= 18 || hour < 6;
                setAutoEffect(isNight ? 'moonlight' : 'matrix');
            };

            updateAutoEffect();
            const timer = setInterval(updateAutoEffect, 60000); // Check every minute
            return () => clearInterval(timer);
        }
    }, [backgroundEffect]);

    const activeEffect = backgroundEffect === 'auto' ? autoEffect : backgroundEffect;

    switch (activeEffect) {
        case 'matrix':
            return <MatrixRain active={true} width={width} height={height} speed={effectSpeed} />;
        case 'stars':
            return <Starfield active={true} width={width} height={height} speed={effectSpeed} />;
        case 'snow':
            return <Snow active={true} width={width} height={height} speed={effectSpeed} />;
        case 'moonlight':
            return <Moonlight active={true} width={width} height={height} />;
        default:
            return null;
    }
};

export default SystemBackground;
