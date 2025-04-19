import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import SubSidebar from "../ui/SubSidebar";
import Headers from "../ui/Headers";

const Layout = () => {
  return (
    <div className="bg-[#181818] w-screen h-screen flex">
      <Sidebar />
      <SubSidebar />
      <div className="bg-[#1f1f1f] w-full">
        <Headers />
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
