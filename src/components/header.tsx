import logo from "@/assets/logo.png";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-black h-[10vh] text-[#F8F9FA]">
      <img src={logo} alt="logo" className="w-[120px] h-[10vh]" />
      <div className="text-[#F8F9FA]">
        <ul className="flex gap-15">
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
      <div className="flex justify-center items-center gap-4">
        <Button value="Baixar Curriculo" icon={<FaDownload />} />
        <div className="flex gap-4 text-white text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-orange-500 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-600 transition duration-300" />
          </a>
          <a
            href="https://github.com/Emm4nuell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-500 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
