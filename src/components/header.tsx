import logo from "@/assets/logo.png";
import { FaDownload } from "react-icons/fa";
import Button from "./Button";
import MenuButton from "./MenuButton";
import Icons from "./Icons";
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <div className="flex relative z-5 justify-between p-2 md:p-5 items-center bg-black h-[10vh] text-[#F8F9FA]">
      <img src={logo} alt="logo" className="w-[100px] h-[7vh]" />
      <div className="block md:hidden">
        <MenuButton />
      </div>
      <div className="text-[#F8F9FA] hidden md:block">
        <MenuBar className="flex gap-10" />
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-4">
          <Button value="Baixar Curriculo" icon={<FaDownload />} />
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
