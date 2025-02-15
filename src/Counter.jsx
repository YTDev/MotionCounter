import React, { useRef, useEffect, use } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = value;
    }
  }, [value]);

  return <span ref={ref}></span>;
}

export default Counter;
