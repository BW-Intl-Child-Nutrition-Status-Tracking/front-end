import react from "react";
import Dashboard from "../../front-end/src/pages/Dashboard";
import Header from "../components/Header";
import Menu2 from "../components/Menu2";

function Page({ children }) {
  return (
    <>
      <Header />
      <MenuTwo />
      <children />
    </>
  );
}

export default Page;
