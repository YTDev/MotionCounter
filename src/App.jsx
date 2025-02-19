import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white text-3xl flex-1">
        {/* <Counter value={90000} /> */}
        <Counter from={0} to={90000} />
      </div>

      <div className="h-screen flex items-center justify-center bg-blue-950 text-white text-3xl flex-1">
        <Counter
          from={90000}
          to={0}
          type="spring"
          springOptions={{ damping: 100, stiffness: 160 }}
        />
        {/* <Counter value={90000} /> */}
      </div>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl flex-1">
        <Counter
          from={0}
          to={90000}
          type="tween"
          tweenOptions={{ duration: 3, easing: "easeInOut" }}
        />
        {/* <Counter value={90000} /> */}
      </div>
    </>
  );
}

export default App;
