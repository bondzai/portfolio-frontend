export const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export const openInSameTab = (url) => {
    window.location.href = url;
};

export const mailTo = (email) => {
    window.location.href = `mailto:${email}`;
};
