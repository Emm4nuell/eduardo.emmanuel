import { ContextProvider } from "@/context/AuthContext";
import { useContext } from "react";

export default function MenuButton() {
  const context = useContext(ContextProvider);

  function onclikMenu() {
    context?.setIsOpen(!context.isOpen);
  }

  return (
    <button
      onClick={onclikMenu}
      className="relative w-10 h-10 flex flex-col justify-between items-center p-2 group cursor-pointer"
    >
      <span
        className={`block h-1 w-8 bg-white rounded transition-transform duration-300 group-hover:bg-orange-400 ${
          context?.isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-1 w-8 bg-white rounded transition-opacity duration-300 group-hover:bg-orange-400 ${
          context?.isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-1 w-8 bg-white rounded transition-transform duration-300 group-hover:bg-orange-400 ${
          context?.isOpen ? "-translate-y-3 -rotate-45" : ""
        }`}
      />
    </button>
  );
}
