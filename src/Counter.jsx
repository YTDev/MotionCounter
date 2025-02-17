import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useInView,
} from "motion/react";
import React, { useRef, useEffect } from "react";

function Counter({ from = 0, to }) {
  const ref = useRef(null);
  const motionCount = useMotionValue(from);

  //control the oscillation to avoid dippin below 0
  const springCount = useSpring(motionCount, {
    damping: 80,
    stiffness: 160,
  });
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
      motionCount.set(to);
    }
  }, [to, motionCount, isInView]);

  return <span ref={ref}></span>;
}

export default Counter;

/*
notes:

Damping:
Represents friction or resistance in the spring system. Higher damping means the motion settles faster with fewer 
oscillations (less bounce), while lower damping results in more oscillation before coming to rest.

Stiffness:
Represents how strongly the spring forces the value back to its target. Higher stiffness makes the response 
faster and more snappy, but if damping is low, it can cause overshoot; lower stiffness yields a gentler, slower movement.


*/
