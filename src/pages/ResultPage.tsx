const ResultPage = () => {
  const testData = import.meta.env.VITE_SERVER_URL;
  return <div>{testData}</div>;
};

export default ResultPage;
