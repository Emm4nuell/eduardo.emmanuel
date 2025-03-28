import { AnimatePropsType } from "@/types/AnimateType";
import { useEffect, useState } from "react";

const Animate = ({ times, children }: AnimatePropsType) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, times);
    return () => clearTimeout(timeout);
  }, [times]);

  return (
    <div
      className={`flex flex-col justify-center items-center font-extrabold md:flex-row text-4xl text-center gap-3 mt-5 transition-all duration-2000 ${
        animate ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

export default Animate;
