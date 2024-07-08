import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const BackToTop = () => {
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
                cursor: "pointer"
            }}
        />
    );
};

export default BackToTop;
