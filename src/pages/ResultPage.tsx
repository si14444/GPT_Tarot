const ResultPage = () => {
  const testData = import.meta.env.VITE_APP_TEST_DATA;
  return <div>{testData}</div>;
};

export default ResultPage;
