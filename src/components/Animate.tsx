import { ReactNode, useEffect, useState } from "react";

type AnimatePropsType = {
  times?: number;
  children?: ReactNode;
};
const Animate = ({ times, children }: AnimatePropsType) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, times);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center font-extrabold md:flex-row text-4xl text-center gap-3 mt-10 transition-all duration-2000 ${
        animate ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
};

export default Animate;
