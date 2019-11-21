import React from "react";

import Header from "./Header";
import Menu2 from "./Menu2";

function Page({ children }) {
  return (
    <>
      <Header />
      <Menu2 />
      {children}
    </>
  );
}

export default Page;
