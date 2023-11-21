import React, { ReactNode } from "react";
import Navbar from "../../common/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  console.log(props.children);
  return (
    <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
