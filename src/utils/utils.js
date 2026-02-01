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
    let years = today.getFullYear() - birthdateObj.getFullYear();
    const months = today.getMonth() - birthdateObj.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthdateObj.getDate())) {
        years--;
    }

    return `${years} years`;
};
