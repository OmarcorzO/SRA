import React from 'react'
import { ReactNode } from "react";

interface OutletProps {
  children: ReactNode;
}

const Outlet = ({ children }: OutletProps) => {
  return <div className="geex-content">{children}</div>;
};

export default Outlet;
