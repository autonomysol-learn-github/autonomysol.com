import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

const BackToTop = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ScrollToTop
            smooth
            style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                textAlign: "center",
                lineHeight: "50px",
                fontSize: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                backgroundColor: isHovered ? '#E5E7EB' : 'transparent', // Gray-200 in Tailwind CSS
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
}

export default BackToTop;
