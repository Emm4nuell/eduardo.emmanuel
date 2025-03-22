import Icons from "./Icons";
import { useContext } from "react";
import { ContextProvider } from "@/context/AuthContext";
import MenuBar from "./MenuBar";

const NavMenu = () => {
  const context = useContext(ContextProvider);

  function handlerOpen() {
    context?.setIsOpen(!context.isOpen);
  }

  return (
    <div
      className={`absolute justify-center z-10 h-[90vh] bg-black/60 backdrop-blur-md transition-all duration-[1s] flex sm:hidden
    ${
      context?.isOpen
        ? "flex w-[90%] translate-x-0"
        : "w-0 translate-x-[-100%] overflow-hidden"
    }`}
    >
      <div className="flex flex-col h-full w-50 overflow-hidden whitespace-nowrap">
        <div className="flex-grow">
          <MenuBar
            className="grid text-center gap-4 mt-10 font-black text-2xl text-white"
            handlerOpen={handlerOpen}
          />
        </div>
        <div className="mt-auto mb-5 border-b-2 border-b-orange-500 p-2 flex justify-center">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
