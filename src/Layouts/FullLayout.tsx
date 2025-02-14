import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Outlet from "../components/Outlet";

import { ReactNode } from "react";

const FullLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <Outlet>{children}</Outlet>
      </div>
    </div>
  );
};

export default FullLayout;
