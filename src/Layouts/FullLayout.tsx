import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Outlet from "../components/Outlet";

import { ReactNode } from "react";

const FullLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="geex-main-content">
        <Sidebar />
        <Outlet>{children}</Outlet>
      </main>
    </div>
  );
};

export default FullLayout;
