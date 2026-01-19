import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScreenDimensions, { ScreenSize } from '../../hooks/useScreenDimensions';
import { usePopup } from '../../contexts/PopupContext';
import WelcomeMessage from './WelcomeMessage';
import { POPUP_VERSION } from '../../utils/constants';
import pkg from '../../../package.json';

const SystemPopupManager = () => {
    const { screenSize } = useScreenDimensions();
    const { addPopup, dismissPopup } = usePopup();
    const navigate = useNavigate();

    useEffect(() => {
        const isMobile = screenSize === ScreenSize.XS || screenSize === ScreenSize.SM;
        const appVersion = pkg.version;

        const handleChangelogClick = (e) => {
            e.preventDefault();
            dismissPopup('system_welcome_version');
            navigate('/changelog');
        };

        addPopup({
            id: 'system_welcome_version',
            title: 'System Update',
            version: POPUP_VERSION,
            storageKey: 'popup_version',
            content: (
                <WelcomeMessage
                    align="center"
                    title="Welcome Back"
                    subTitle={`Portfolio OS v${appVersion}`}
                    message={
                        <div style={{ textAlign: 'left' }}>
                            <p><strong>Latest System Upgrades 🚀</strong></p>
                            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li>🧪 <strong>Research Shelf</strong>: R&D Whitepapers & Dev Logs.</li>
                                <li>💬 <strong>Feedback</strong>: Secure messaging with Google Auth.</li>
                                <li>🌍 <strong>Immersive</strong>: Matrix, Starfield & Snow effects.</li>
                                <li>⚡ <strong>Performance</strong>: Enhanced stability & polished UI.</li>
                            </ul>
                            <br />
                            <a href="/changelog" onClick={handleChangelogClick} style={{ color: '#1890ff', cursor: 'pointer' }}>View Full Changelog &rarr;</a>
                        </div>
                    }
                    footer={
                        isMobile ? (
                            <div style={{
                                padding: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                borderLeft: '3px solid #ffcc00'
                            }} >
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    fontStyle: 'italic'
                                }}>
                                    <strong>* Info:</strong> You are using a mobile device. For the full OS experience (Start Menu, draggable windows), please try a desktop screen.
                                </p>
                            </div >
                        ) : null}
                />
            ),
            onceForever: true,
            okText: "Enter System",
            trafficLights: { showClose: true, showMinimize: false, showMaximize: false }
        });
    }, [addPopup, dismissPopup, navigate, screenSize]);

    return null;
};

export default SystemPopupManager;
