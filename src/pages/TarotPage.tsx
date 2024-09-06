import Tarot from "../components/Tarot";
import { shuffleArray } from "../utils/shuffleArray";

const TarotPage = () => {
  const tarotList: number[] = Array.from({ length: 22 }, (_, index) => index);
  const shuffledTarotList = shuffleArray(tarotList);

  return (
    <div className="flex flex-wrap gap-16 p-4 justify-center items-center">
      {shuffledTarotList.map((tarot) => (
        <div key={tarot} className="flex-none w-20 h-40 mb-10">
          <Tarot number={tarot} />
        </div>
      ))}
    </div>
  );
};

export default TarotPage;
