import { CardPropsType } from "@/types/Card";

const CardContato = ({ titulo, children }: CardPropsType) => {
  return (
    <div className="border-2 border-gray-700 rounded-lg bg-gray-800 p-6 h-auto">
      <h3 className="text-white text-[22px] font-black group-hover:text-orange-500 group-transition-all group-duration-300">
        {titulo}
      </h3>
      <div className="text-[14px] text-[#f0f8ff]">{children}</div>
    </div>
  );
};

export default CardContato;
