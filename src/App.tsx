import { Outlet } from "react-router-dom";
import Header from "./components/header";
import NavMenu from "./components/MenuFlutuante";
import { useContext } from "react";
import { ContextProvider } from "./context/AuthContext";

function App() {
  const context = useContext(ContextProvider);
  return (
    <div className="bg-gray-900">
      <Header />
      <NavMenu />
      <div
        className={`"block min-h-[100vh] border-2 pt-[10vh] border-red-600" ${
          context?.isOpen && "pointer-events-none"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
