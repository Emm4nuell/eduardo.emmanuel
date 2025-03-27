import { AnimatePropsType } from "@/types/AnimateType";
import { useEffect, useState } from "react";

const AnimateContato = ({ times, children }: AnimatePropsType) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, times);
    return () => clearTimeout(timeout);
  }, [times]);
  return (
    <div
      className={`transition-all duration-2000 ${
        animate ? "translate-x-[-100px] opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateContato;
