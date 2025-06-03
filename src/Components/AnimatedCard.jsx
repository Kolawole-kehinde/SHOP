import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedWrapper = ({ children, animation, className = "" }) => {
  const { ref, inView } = useInView({ threshold: 0.0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    } else {
      setVisible(false); 
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`animate__animated ${visible ? animation : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
