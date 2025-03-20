import { Link } from "react-router-dom";
import Icons from "./Icons";

const NavMenu = () => {
  return (
    <div className="flex flex-col h-full w-50 overflow-hidden whitespace-nowrap">
      <div className="flex-grow">
        <ul className="grid text-center gap-4 mt-10 font-black text-2xl text-white">
          <li>
            <Link to={"/home"}>Início</Link>
          </li>
          <li>
            <Link to={"#"}>Sobre mim</Link>
          </li>
          <li>
            <Link to={"#"}>Projetos</Link>
          </li>
          <li>
            <Link to={"#"}>Contato</Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto mb-5 border-b-2 border-b-orange-500 p-2 flex justify-center">
        <Icons />
      </div>
    </div>
  );
};

export default NavMenu;
