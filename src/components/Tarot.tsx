import React, { useState } from "react";
import tarotBackground from "../assets/tarot/tarotBackground.png";

const Tarot = ({ number }: { number: number }) => {
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setFlipped(!flipped);

      // Set a timeout to reset animation state after animation duration
      setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Match the duration of your transition
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-28 h-60 cursor-pointer perspective-1000`}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : "rotate-y-0"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`absolute w-full h-full ${flipped ? "bg-gray-800" : ""}`}
          style={{
            backgroundImage: flipped ? "none" : `url(${tarotBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className={`absolute w-full h-full flex items-center justify-center text-white text-2xl font-bold transform ${
            flipped ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

export default Tarot;
