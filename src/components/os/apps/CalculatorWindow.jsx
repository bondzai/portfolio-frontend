import React from 'react';
import { CalculatorOutlined } from '@ant-design/icons';
import OSWindow from '../OSWindow';

const CalculatorWindow = ({ isOpen, onClose }) => {
    return (
        <OSWindow
            title="Calculator"
            icon={<CalculatorOutlined />}
            isOpen={isOpen}
            onClose={onClose}
            width={320}
            height={480}
        >
            <iframe
                src="https://bondzai.github.io/micro-app-simple-calculator/"
                title="Calculator"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </OSWindow>
    );
};

export default CalculatorWindow;
