import React, { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout(props) {
  
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
