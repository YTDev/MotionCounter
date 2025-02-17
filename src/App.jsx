import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl">
        {/* <Counter value={90000} /> */}
        <Counter from={0} to={90000} />
      </div>
      <div className="h-screen flex items-center justify-center bg-blue-950 text-white text-3xl">
        <Counter from={90000} to={0} />
        {/* <Counter value={90000} /> */}
      </div>
    </>
  );
}

export default App;
