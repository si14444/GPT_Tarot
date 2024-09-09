import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgrountNoHeader } from "../assets";
import { tarotImages } from "../constants/tarot";
import useTarot from "../store/useTarot";
import useType from "../store/useType";
import { useCallGPT } from "../hooks/useCallGPT";

const ResultPage = () => {
  const [enabled, setEnabled] = useState(false);
  const { tarot, resetTarot } = useTarot();
  const { type } = useType();
  const navigate = useNavigate();

  const { data, isLoading } = useCallGPT(tarot, type, enabled);

  useEffect(() => {
    setEnabled(true); // 컴포넌트가 마운트된 후에 API 호출을 트리거
  }, []);

  const handleReturn = () => {
    resetTarot();
    navigate("/");
  };

  console.log(isLoading, data);

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
      <BackgrountNoHeader className="z-0 absolute top-0 left-0 w-full h-full object-cover" />
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="z-10 justify-center flex items-start w-screen">
            <div className="flex gap-20">
              <img src={tarotImages[tarot[0]]} className="w-full h-full" />
              <img src={tarotImages[tarot[1]]} className="w-full h-full" />
              <img src={tarotImages[tarot[2]]} className="w-full h-full" />
            </div>
          </div>
          <div
            className="z-10 mt-12 p-8 text-white text-lg text-center rounded-3xl"
            style={{ maxWidth: "90%", backgroundColor: "#464956" }}
          >
            {data?.choices[0].message.content}
          </div>
          <button
            className="z-10 bg-indigo-500 text-white mt-8 hover:bg-indigo-500"
            onClick={handleReturn}
          >
            돌아가기
          </button>
        </>
      )}
    </div>
  );
};

export default ResultPage;
