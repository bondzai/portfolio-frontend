export const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export const mailTo = (email) => {
    window.location.href = `mailto:${email}`;
};
