import logo from "@/assets/logo.png";
import { FaDownload } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import Icons from "./Icons";

const Header = () => {
  return (
    <div className="flex relative justify-between p-5 items-center bg-black h-[10vh] text-[#F8F9FA]">
      <img src={logo} alt="logo" className="w-[120px] h-[10vh]" />
      <div className="block md:hidden">
        <MenuButton />
      </div>
      <div className="text-[#F8F9FA] hidden md:block">
        <ul className="flex gap-10">
          <li>
            <Link to={"/home"}>Início</Link>
          </li>
          <li>
            <Link to={"#"}>Sobre min</Link>
          </li>
          <li>
            <Link to={"#"}>Projetos</Link>
          </li>
          <li>
            <Link to={"#"}>Contato</Link>
          </li>
        </ul>
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
