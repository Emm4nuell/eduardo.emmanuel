import { Link } from "react-router-dom";

type PropsType = {
  className?: string;
  handlerOpen?: () => void;
};

const MenuBar = ({ className, handlerOpen }: PropsType) => {
  return (
    <div>
      <ul className={className}>
        <li className="transition-transform duration-300 hover:scale-110">
          <Link
            to={"/home"}
            onClick={handlerOpen}
            className=" hover:border-b-2 hover:border-orange-500"
          >
            Início
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <Link
            to={"/sobre-min"}
            onClick={handlerOpen}
            className=" hover:border-b-2 hover:border-orange-500"
          >
            Sobre mim
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <Link
            to={"#"}
            onClick={handlerOpen}
            className=" hover:border-b-2 hover:border-orange-500"
          >
            Projetos
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-110">
          <Link
            to={"/contato"}
            onClick={handlerOpen}
            className=" hover:border-b-2 hover:border-orange-500"
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
