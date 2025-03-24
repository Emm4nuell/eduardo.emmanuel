import { ReactNode } from "react";

type ProjetosPropsType = {
  children?: ReactNode;
};
const CardProjetos = ({ children }: ProjetosPropsType) => {
  return (
    <div className="p-6 border-2 border-gray-700 rounded-lg bg-gray-800 transition-transform duration-300 hover:scale-105 hover:border-orange-500">
      {children}
    </div>
  );
};

export default CardProjetos;
