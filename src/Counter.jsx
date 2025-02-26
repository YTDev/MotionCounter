import {
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  useInView,
  animate,
} from "motion/react";
import React, { useRef, useEffect } from "react";

//control the oscillation to avoid dippin below 0 !
function Counter({
  from = 0,
  to,
  type = "spring",
  springOptions = { damping: 80, stiffness: 160 },
  tweenOptions = { duration: 2, easing: "easeInOut" },
  formatter = (value) => value.toFixed(0),
  style = {},
  className = {},
  inViewOptions = { once: true },
}) {
  const ref = useRef(null);
  const motionCount = useMotionValue(from);

  const animatedValue =
    type === "spring" ? useSpring(motionCount, springOptions) : motionCount;

  const isInView = useInView(ref, inViewOptions);

  //no need to use useEffect + springCount.on...+ cleanup function
  useMotionValueEvent(animatedValue, "change", (latest) => {
    if (ref.current) {
      // ref.current.textContent = Intl.NumberFormat("en-US").format(
      //   latest.toFixed(0)
      // );
      ref.current.textContent = formatter(latest);
    }
  });

  useEffect(() => {
    if (isInView) {
      if (type === "spring") {
        //this line should start the spring animation
        motionCount.set(to);
      } else if (type === "tween") {
        animate(motionCount, to, tweenOptions);
      }
    } else {
      motionCount.set(from);
    }
  }, [from, to, isInView, type, tweenOptions, motionCount]);

  return <span ref={ref} style={style} className={className}></span>;
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
