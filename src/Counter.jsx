import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import React, { useRef, useEffect } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const motionCount = useMotionValue(0);
  const springCount = useSpring(motionCount);
  const isInView = useInView(ref, { once: true });
  //no need to use useEffect + springCount.on...+ cleanup function
  useMotionValueEvent(springCount, "change", (latest) => {
    if (ref.current) {
      ref.current.textContent = latest.toFixed(0);
    }
  });

  // useEffect(() => {
  //   console.log("element in view: ", isInView);
  // }, [isInView]);

  useEffect(() => {
    if (isInView) {
      //this line should start the spring animation
      motionCount.set(value);
    }
  }, [value, motionCount, isInView]);

  return <span ref={ref}></span>;
}

export default Counter;
