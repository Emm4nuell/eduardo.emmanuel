import { ButtonType } from "@/types/IButtonType";
import React from "react";

const Button = ({ value, icon }: ButtonType) => {
  return (
    <div>
      <button className="m-auto flex justify-center items-center gap-2 bg-orange-500 rounded-sm w-50 h-10 font-bold cursor-pointer">
        {icon}
        {value}
      </button>
    </div>
  );
};

export default Button;
