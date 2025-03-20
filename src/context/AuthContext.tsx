import { ContextType } from "@/types/IProviderType";
import React, { createContext, useState } from "react";

const ContextProvider = createContext<ContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handlerLogin() {
    console.log("Login");
  }
  function handlerLogout() {
    console.log("Logout");
  }

  return (
    <ContextProvider.Provider
      value={{ handlerLogin, handlerLogout, isOpen, setIsOpen }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export { AuthProvider, ContextProvider };
