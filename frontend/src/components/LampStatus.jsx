export const getLampStatusStyle = (status) => {
    switch (status) {
        case 'online':
            return {
                backgroundColor: 'green',
                display: 'inline-block',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                animation: 'blinking 1s infinite',
            };
        case 'offline':
            return {
                backgroundColor: 'red',
                display: 'inline-block',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
            };
        case 'inprogress':
            return {
                backgroundColor: 'orange',
                display: 'inline-block',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                animation: 'blinking 1s infinite',
            };
        default:
            return {};
    }
};
