import { CardPropsType } from "@/types/Card";

const Card = ({ icons, titulo, children }: CardPropsType) => {
  return (
    <div className="group bg-[#262626]/80 border-[#3e3e3e] border-2 transition-all duration-300 hover:border-orange-500 hover:scale-105 rounded-lg w-full max-w-4xl mx-auto">
      <div className="h-1 bg-gradient-to-r from-orange-500 to-[#FF6900] mt-8"></div>

      <div className="p-6 flex flex-col items-center text-center">
        <div className="flex justify-center items-center mb-4">{icons}</div>

        <h3 className="text-white text-2xl font-semibold group-hover:text-orange-500 transition-all duration-300">
          {titulo}
        </h3>

        <div className="text-sm text-gray-200 mt-4 space-y-2">{children}</div>
      </div>

      <div className="group-hover:shadow-xl group-hover:shadow-orange-500 transition-all duration-300 rounded-lg"></div>
    </div>
  );
};

export default Card;
