import Counter from "./Counter";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-3xl flex-1">
        {/* <Counter value={90000} /> */}
        <div>
          <Counter
            from={0}
            to={99999}
            inViewOptions={{ once: false }}
            className="text-green-500"
            formatter={(value) =>
              Intl.NumberFormat("en-US").format(value.toFixed(0))
            }
          />
        </div>

        <div>
          <Counter from={0} to={90000} />
        </div>

        <div>
          <Counter
            from={0}
            to={90000}
            formatter={(value) =>
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(value.toFixed(2))
            }
          />
        </div>
        <div>
          <Counter
            from={0}
            to={90000}
            formatter={(value) => `${value.toFixed(0)} clicks`}
          />
        </div>
        <div>
          <Counter
            from={0}
            to={100}
            formatter={(value) => `${value.toFixed(1)}%`}
          />
        </div>
      </div>

      <div className="h-screen flex items-center justify-center bg-blue-950 text-white text-3xl flex-1">
        <Counter
          from={90000}
          to={0}
          type="spring"
          springOptions={{ damping: 100, stiffness: 160 }}
          formatter={(value) =>
            Intl.NumberFormat("en-US").format(value.toFixed(0))
          }
          onAnimationStart={() =>
            console.log("The blue div animation has started!")
          }
        />
        {/* <Counter value={90000} /> */}
      </div>
      <div className="h-screen flex items-center justify-center bg-black text-white text-3xl flex-1">
        <Counter
          from={0}
          to={-90000}
          type="tween"
          tweenOptions={{ duration: 3, easing: "easeInOut" }}
        />
        {/* <Counter value={90000} /> */}
      </div>
    </>
  );
}

export default App;
