import React, { ReactNode } from "react";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {

  return (
    <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
