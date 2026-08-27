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

const MONTH_LABELS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Durations are counted inclusively - Jan 2026 through Aug 2026 reads as
// 8 months, not 7 - so both the start and end month are counted.
export const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    if (isNaN(start) || isNaN(end)) return "";

    const totalMonths = Math.max(
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1,
        0
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const parts = [];

    if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} month${months > 1 ? "s" : ""}`);

    return parts.join(" ") || "0 months";
};

// Renders "Jul 2016 - Jan 2022 (5 years 7 months)". An omitted endDate is
// an ongoing role, so it reads as "Present" and keeps counting from today.
export const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (isNaN(start) || (end && isNaN(end))) return "";

    const label = (date) => `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;

    return `${label(start)} - ${end ? label(end) : "Present"} (${calculateDuration(startDate, endDate)})`;
};
