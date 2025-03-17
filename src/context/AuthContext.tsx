import { ContextType } from "@/type/IProviderType";
import React, { createContext } from "react";

const ContextProvider = createContext<ContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  function handlerLogin() {
    console.log("Login");
  }
  function handlerLogout() {
    console.log("Logout");
  }

  return (
    <ContextProvider.Provider
      value={{ handlerLogin, handlerLogout, status: true }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export { AuthProvider, ContextProvider };
