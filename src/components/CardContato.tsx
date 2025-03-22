import { CardPropsType } from "@/types/Card";

const CardContato = ({ titulo, children }: CardPropsType) => {
  return (
    <div className="bg-[#262626]/60 p-6 rounded-2xl h-auto">
      <h3 className="text-white text-[22px] font-black group-hover:text-orange-500 group-transition-all group-duration-300">
        {titulo}
      </h3>
      <div className="text-[14px] text-[#f0f8ff]">{children}</div>
    </div>
  );
};

export default CardContato;
