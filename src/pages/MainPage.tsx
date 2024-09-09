import TypeButton from "../components/buttons/TypeButton";
import { Background } from "../assets";

const MainPage = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
      <Background className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="flex flex-col gap-8 mt-60">
        <TypeButton title={"연애운"} />
        <TypeButton title={"학업운"} />
        <TypeButton title={"금전운"} />
        <TypeButton title={"오늘의 운세"} />
      </div>
    </div>
  );
};

export default MainPage;
