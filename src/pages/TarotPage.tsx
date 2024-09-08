import { useEffect, useState } from "react";
import Tarot from "../components/Tarot";
import { shuffleArray } from "../utils/shuffleArray";
import { BackgrountNoHeader } from "../assets";
import { useNavigate } from "react-router-dom";

const TarotPage = () => {
  const [shuffledTarotList, setShuffledTarotList] = useState<number[]>([]);
  const [cardCount, setCardCount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const tarotList: number[] = Array.from({ length: 22 }, (_, index) => index);
    setShuffledTarotList(shuffleArray(tarotList));
  }, []);

  const handleAddCardCount = () => {
    setCardCount((prevCount) => prevCount + 1);
    if (cardCount >= 2) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
      <BackgrountNoHeader className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="flex flex-wrap gap-10 p-4 justify-center items-center">
        {shuffledTarotList.map((tarot) => (
          <div key={tarot} className="flex-none w-24 h-40 mb-12">
            <Tarot number={tarot} setCount={handleAddCardCount} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotPage;
