import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgrountNoHeader } from "../assets";
import { tarotImages } from "../constants/tarot";
import useTarot from "../store/useTarot";
import { callGPT } from "../api/callGPT";
import useType from "../store/useType";

const ResultPage = () => {
  const [result, setResult] = useState<string | null>(null); // 상태를 선언
  const { tarot, resetTarot } = useTarot();
  const { type } = useType();
  const navigate = useNavigate();

  // API 호출
  useEffect(() => {
    const fetchData = async () => {
      const data = await callGPT(tarot, type);
      if (data && data.choices.length > 0) {
        setResult(data.choices[0].message.content);
      }
    };

    fetchData();
  }, []);

  const handleReturn = () => {
    resetTarot();
    navigate("/");
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
      <BackgrountNoHeader className="z-0 absolute top-0 left-0 w-full h-full object-cover" />
      <div className="z-10 justify-center flex items-start w-screen">
        <div className="flex gap-20">
          <img src={tarotImages[tarot[0]]} className="w-full h-full" />
          <img src={tarotImages[tarot[1]]} className="w-full h-full" />
          <img src={tarotImages[tarot[2]]} className="w-full h-full" />
        </div>
      </div>
      <div
        className="z-10 mt-12 p-8 text-lg bg-indigo-800 text-center rounded-3xl"
        style={{ maxWidth: "90%" }}
      >
        {result}
      </div>
      <button
        className="z-10 bg-indigo-500 mt-8 hover:bg-indigo-500"
        onClick={handleReturn}
      >
        돌아가기
      </button>
    </div>
  );
};

export default ResultPage;
