import { useMotionValue, useSpring, useMotionValueEvent } from "motion/react";
import React, { useRef, useEffect } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const motionCount = useMotionValue(0);
  const springCount = useSpring(motionCount);

  //no need to use useEffect + springCount.on...+cleanup function
  useMotionValueEvent(springCount, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = latest.toFixed(0);
    }
  });

  useEffect(() => {
    motionCount.set(value);
  }, [value, motionCount]);

  return <span ref={ref}></span>;
}

export default Counter;
