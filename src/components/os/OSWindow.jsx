import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { CloseOutlined, MinusOutlined } from '@ant-design/icons';
import { isMobile } from '../../utils/constants';
import './OSWindow.css';

const OSWindow = ({
    title = "Application",
    isOpen,
    onClose,
    children,
    width: initialWidth = 400,
    height: initialHeight = 500,
    icon = null
}) => {
    const nodeRef = useRef(null);
    const [isMaximized, setIsMaximized] = useState(false);

    // Track State for restoration
    const [size, setSize] = useState(() =>
        isMobile
            ? { width: window.innerWidth * 0.9, height: window.innerHeight * 0.8 }
            : { width: initialWidth, height: initialHeight }
    );

    const [position, setPosition] = useState(() =>
        isMobile
            ? { x: window.innerWidth * 0.05, y: 60 }
            : { x: 50, y: 100 }
    );
    const [preMaxState, setPreMaxState] = useState(null);

    // Resize state
    const isResizing = useRef(false);

    if (!isOpen) return null;

    const toggleMaximize = () => {
        if (isMaximized) {
            // Restore
            if (preMaxState) {
                setSize(preMaxState.size);
                setPosition(preMaxState.position);
            }
            setIsMaximized(false);
        } else {
            // Maximize
            setPreMaxState({ size, position });
            setIsMaximized(true);
            setPosition({ x: 0, y: 0 }); // Visual reset, handled by CSS mostly if fixed
        }
    };

    // React-Draggable handler
    const onDrag = (e, data) => {
        if (isMaximized) return;
        setPosition({ x: data.x, y: data.y });
    };

    // Custom Resize Handler
    const handleResizeMouseDown = (e) => {
        e.stopPropagation(); // Prevent drag start
        isResizing.current = true;
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = size.width;
        const startHeight = size.height;

        const onMouseMove = (moveEvent) => {
            if (!isResizing.current) return;
            const newWidth = Math.max(300, startWidth + (moveEvent.clientX - startX));
            const newHeight = Math.max(200, startHeight + (moveEvent.clientY - startY));
            setSize({ width: newWidth, height: newHeight });
        };

        const onMouseUp = () => {
            isResizing.current = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const currentStyle = isMaximized ? {
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        transform: 'none',
        borderRadius: 0
    } : {
        width: size.width,
        height: size.height
    };

    return ReactDOM.createPortal(
        <Draggable
            handle=".window-header"
            nodeRef={nodeRef}
            position={isMaximized ? { x: 0, y: 0 } : position}
            onDrag={onDrag}
            disabled={isMaximized}
        >
            <div
                ref={nodeRef}
                className={`os-window Glass-window ${isMaximized ? 'maximized' : ''}`}
                style={currentStyle}
            >
                {/* Header Bar */}
                <div className="window-header" onDoubleClick={toggleMaximize}>
                    <div className="window-title">
                        {icon && <span className="window-icon">{icon}</span>}
                        {title}
                    </div>
                    <div className="window-controls">
                        <button className="control-btn minimize" onClick={onClose}>
                            <MinusOutlined />
                        </button>
                        <button className="control-btn maximize" onClick={toggleMaximize}>
                            <div style={{ width: 6, height: 6, border: '1px solid #4a4a4a', borderRadius: 1 }}></div>
                        </button>
                        <button className="control-btn close" onClick={onClose}>
                            <CloseOutlined />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="window-content-area">
                    {children}
                </div>

                {/* Resize Handle */}
                {!isMaximized && (
                    <div
                        className="resize-handle"
                        onMouseDown={handleResizeMouseDown}
                    />
                )}
            </div>
        </Draggable>,
        document.body
    );
};

export default OSWindow;
