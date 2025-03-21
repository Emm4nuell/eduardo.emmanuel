import { Outlet } from "react-router-dom";
import Header from "./components/header";
import NavMenu from "./components/MenuFlutuante";

function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <Outlet />
    </div>
  );
}

export default App;
