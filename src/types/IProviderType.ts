import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
};

export type ContextType = {
  handlerLogin: () => void;
  handlerLogout: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
