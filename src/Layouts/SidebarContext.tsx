import React, { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  isOpen: number;
  setIsOpen: (num: number) => void;
  openSubmenu: number;
  setOpenSubmenu: (num: number) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(-1);
  const [openSubmenu, setOpenSubmenu] = useState(-1);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, openSubmenu, setOpenSubmenu }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar debe estar dentro de un SidebarProvider");
  }
  return context;
};