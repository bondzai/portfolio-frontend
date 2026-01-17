import React from 'react';

/**
 * Reusable Message Component for System Popups
 * @param {string} align - 'left', 'center', 'right'
 * @param {ReactNode} title - Main title
 * @param {ReactNode} subTitle - Subtitle or version info
 * @param {ReactNode} message - Main body content
 * @param {ReactNode} footer - Optional footer content (e.g. warnings)
 * @param {string|ReactNode|boolean} signature - Signature text or false to hide
 */
const WelcomeMessage = ({
    align = 'left',
    title = "Welcome Voyager",
    subTitle = "Portfolio OS v2.0.1",
    message,
    footer,
    signature = "James Bond"
}) => {

    const textAlign = align === 'center' ? 'center' : align === 'right' ? 'right' : 'left';
    const flexAlign = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';

    return (
        <div style={{ paddingBottom: '10px', textAlign: textAlign }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: flexAlign, marginBottom: '15px' }}>
                <h3 style={{ margin: 0, color: 'var(--text-color-primary)' }}>{title}</h3>
                {subTitle && <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>{subTitle}</p>}
            </div>

            <div style={{ lineHeight: '1.6', opacity: 0.9 }}>
                {message || "Welcome to my digital workspace."}
            </div>

            {/* Dynamic Footer / Warning Area */}
            {footer && (
                <div style={{ marginTop: '20px' }}>
                    {footer}
                </div>
            )}

            {signature && (
                <div style={{ marginTop: '25px', textAlign: 'right', fontSize: '14px', fontStyle: 'italic', opacity: 0.8 }}>
                    Thanks for reading,<br />{signature}
                </div>
            )}
        </div>
    );
};

export default WelcomeMessage;
