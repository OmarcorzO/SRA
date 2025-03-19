import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Outlet from "../components/Outlet";

import { ReactNode } from "react";
interface FullLayoutProps {
  children: ReactNode;
  title?: string;
  desc?: string;
}

const FullLayout = ({ children, title = "", desc = "" }: FullLayoutProps) => {
  return (
    <div>
      <Header title={title} desc={desc}/>
      <main className="geex-main-content">
        <Sidebar />
        <Outlet>{children}</Outlet>
      </main>
    </div>
  );
};

export default FullLayout;
