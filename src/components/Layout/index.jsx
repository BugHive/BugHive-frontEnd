import React from "react";

import Header from "../Header";
import Main from "../Main";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <SideBar />
    </div>
  );
}

export default Index;
