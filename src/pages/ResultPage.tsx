import useTarot from "../store/useTarot";

const ResultPage = () => {
  const { tarot } = useTarot();
  return <div>{tarot}</div>;
};

export default ResultPage;
