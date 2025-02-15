import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl">
        <Counter value={90000} />
      </div>
      <div className="h-screen flex items-center justify-center bg-blue-950 text-white text-3xl">
        <Counter value={90000} />
      </div>
    </>
  );
}

export default App;
