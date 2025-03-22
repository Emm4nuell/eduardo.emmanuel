import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import SobreMin from "./pages/SobreMin/SobreMin.tsx";
import Contato from "./pages/contato/Contato.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/sobre-min", element: <SobreMin /> },
      { path: "/contato", element: <Contato /> },
      { path: "*", element: <Navigate to={"/home"} replace /> },
      { index: true, element: <Navigate to={"/home"} replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
