import React, { useEffect, useState } from 'react';
import './HomeAnimEl.css'; // Make sure this CSS file is created

const HomeAnimEl = () => {
    const [strokeColor, setStrokeColor] = useState(getRandomColor());

    // Function to generate a random color excluding black, white, and transparent
    function getRandomColor() {
        const colors = [
            '#FF5733', // Red
            '#33FF57', // Green
            '#3357FF', // Blue
            '#FBBE9D', // Light Orange
            '#FFC300', // Yellow
            '#9D33FF', // Purple
            '#FF33A6', // Pink
            '#33FFF5', // Cyan
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setStrokeColor(getRandomColor());
        }, 3000); // Change color every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heartbeat-container">
            <svg
                className="heartbeat-svg"
                viewBox="0 0 200 50"
                preserveAspectRatio="none"
            >
                {/* Pure horizontal straight line */}
                <line
                    x1="0"
                    y1="25"
                    x2="200"
                    y2="25"
                    stroke={strokeColor} // Use the strokeColor state
                    strokeWidth="4" // Slightly thicker for better visibility
                />
            </svg>
        </div>
    );
};

export default HomeAnimEl;
