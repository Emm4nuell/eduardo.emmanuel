import { ButtonType } from "@/types/IButtonType";

const Button = ({ value, icon }: ButtonType) => {
  return (
    <div>
      <a
        href="../arquivos/Eduardo Emmanuel.pdf"
        download="Eduardo Emmanuel.pdf"
        className="m-auto flex justify-center items-center gap-2 bg-orange-500 rounded-sm w-45 h-10 font-bold cursor-pointer"
      >
        {icon}
        {value}
      </a>
      {/* <a
        href="#"
        className="m-auto flex justify-center items-center gap-2 bg-orange-500 rounded-sm w-45 h-10 font-bold cursor-pointer"
      >
        {icon}
        {value}
      </a> */}
    </div>
  );
};

export default Button;
