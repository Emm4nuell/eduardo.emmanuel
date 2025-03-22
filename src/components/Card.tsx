import { ReactNode } from "react";

type PropsType = {
  icons?: ReactNode;
  titulo?: string;
  children?: ReactNode;
};
const Card = ({ icons, titulo, children }: PropsType) => {
  return (
    <div className="bg-[#262626]/60 border-white border-1 rounded-[14px] w-full">
      <div className="border-2 border-[#FF6900] mt-5"></div>
      <div className="grid gap-5 p-4">
        {icons}
        <h3 className="text-white font-black">{titulo}</h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
