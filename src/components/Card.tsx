import { ReactNode } from "react";

type PropsType = {
  icons?: ReactNode;
  titulo?: string;
  children?: ReactNode;
};
const Card = ({ icons, titulo, children }: PropsType) => {
  return (
    <div className="group bg-[#262626]/60 border-white transition-all duration-300 hover:border-orange-500 hover:scale-102 border-1 rounded-[14px] w-full">
      <div className="h-1 bg-gradient-to-r from-orange-500 to-[#FF6900] mt-10"></div>
      <div className="grid gap-5 p-4">
        {icons}
        <h3 className="text-white text-[22px] font-black group-hover:text-orange-500 group-transition-all group-duration-300">
          {titulo}
        </h3>
        <div className="text-[14px] text-[#f0f8ff]">{children}</div>
      </div>
    </div>
  );
};

export default Card;
