import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex gap-4 text-white text-[20px]">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-orange-500 transition duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/eduardo-emmanuel-096403221/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="hover:text-blue-500 transition duration-300" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Icons;
