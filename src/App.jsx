import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl">
        <Counter value={7000} />
      </div>
    </>
  );
}

export default App;
