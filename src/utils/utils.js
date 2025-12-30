export const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export const openInSameTab = (url) => {
    window.location.href = url;
};

export const mailTo = (email) => {
    window.location.href = `mailto:${email}`;
};

export const calculateAge = (birthdate) => {
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    const years = today.getFullYear() - birthdateObj.getFullYear();
    const months = today.getMonth() - birthdateObj.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthdateObj.getDate())) {
        return `${years - 1} year ${12 - birthdateObj.getMonth() + today.getMonth()} months`;
    } else {
        return `${years} years ${months} months`;
    }
};
