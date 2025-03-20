import { ReactNode } from "react";

export interface ChildrenType {
  children: ReactNode;
}

export interface ContextType {
  handlerLogin: () => void;
  handlerLogout: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
