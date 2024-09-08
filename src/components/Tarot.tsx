import { useState } from "react";
import tarotBackground from "../assets/tarot/tarotBackground2.png";
import { tarotImages } from "../assets/constants/tarot";
import useTarot from "../store/useTarot";

const Tarot = ({
  number,
  setCount,
}: {
  number: number;
  setCount: () => void;
}) => {
  const [flipped, setFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { addTarot } = useTarot();

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setFlipped(!flipped);

      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }
    addTarot(number);
    setCount();
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-28 h-56 cursor-pointer perspective-1000"
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
          <img
            src={tarotImages[number]}
            alt={`Tarot card number ${number}`}
            className="w-full h-full rotate-y-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Tarot;
