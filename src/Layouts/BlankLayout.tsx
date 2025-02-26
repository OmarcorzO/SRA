import React from 'react'
import { ReactNode } from "react";

const BlankLayout = ({ children }: { children: ReactNode }) => {
  return <div style={{ backgroundColor: 'white'}}>{children}</div>;
};

export default BlankLayout;
