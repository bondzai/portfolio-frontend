import { CSSProperties } from 'react';

export const getHighlightStatusStyle = (isHighlight: boolean): CSSProperties => {
    if (isHighlight) {
        return {
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'yellow',
        };
    }
    return {};
};

export const getLampStatusStyle = (status: string): CSSProperties => {
    switch (status) {
        case 'online':
            return {
                backgroundColor: 'green',
                display: 'inline-block',
                borderRadius: '50%',
                width: 14,
                height: 14,
                animation: 'blinking 1s infinite',
            };
        case 'offline':
            return {
                backgroundColor: 'red',
                display: 'inline-block',
                borderRadius: '50%',
                width: 14,
                height: 14,
            };
        case 'inprogress':
            return {
                backgroundColor: 'orange',
                display: 'inline-block',
                borderRadius: '50%',
                width: 14,
                height: 14,
                animation: 'blinking 1s infinite',
            };
        default:
            return {};
    }
};

export const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
