import React from "react";
import { LuLoader2 } from "react-icons/lu";

// Define the keyframes for the color change animation
const colorChangeAnimation = `
  @keyframes colorChange {
    0% { stroke: #ff0000; }
    100% { stroke: #ff0000; }
    14.3% { stroke: #ff7f00; }
    28.6% { stroke: #ffff00; }
    42.9% { stroke: #00ff00; }
    57.2% { stroke: #0000ff; }
    71.5% { stroke: #4b0082; }
    85.8% { stroke: #8b00ff; }
  }
`;

// Define the keyframes for the spinning animation
const spinAnimation = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => {
    return (
        <>
            <style>{colorChangeAnimation}</style>
            <style>{spinAnimation}</style>
            <div className="fixed top-0 z-10 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-75">
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 flex justify-center items-center">
                    {/* Loader icon with color change and spin animation */}
                    <LuLoader2
                        className="h-16 w-12"
                        style={{
                            animation: "spin 2s linear infinite, colorChange 2s linear infinite"
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Loader;
