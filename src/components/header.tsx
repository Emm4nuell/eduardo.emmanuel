import logo from "@/assets/logo.png";
import { FaDownload } from "react-icons/fa";
import Button from "./Button";
import MenuButton from "./MenuButton";
import Icons from "./Icons";
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <div className="flex fixed z-10 justify-between p-2 md:p-5 items-center bg-black/60 text-white h-[10vh] backdrop-blur-md w-full">
      <img src={logo} alt="logo" className="w-[100px] h-[7vh]" />

      <div className="block z-0 md:hidden">
        <MenuButton />
      </div>

      <div className="hidden md:block">
        <MenuBar className="flex gap-10" />
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-4">
          <Button value="Baixar Currículo" icon={<FaDownload />} />
          <Icons />
        </div>
      </div>
      <div className="absolute z-11 right-6 flex md:hidden justify-center items-center rounded-b-2xl top-[10vh] w-10 h-10 bg-black/60">
        <a
          href="../arquivos/Eduardo Emmanuel.pdf"
          download="Eduardo Emmanuel.pdf"
          className="text-orange-400"
        >
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
