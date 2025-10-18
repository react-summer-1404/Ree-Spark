import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="flex justify-center dark:bg-slate-800">
      <div className="w-[1440px] flex justify-center flex-col">
        <div className=" h-[50px] mt-6">
          <Navbar />
        </div>

        <main className=" overflow-hidden lg:overflow-x-hidden">
          <Outlet />
        </main>

        <div className=" mb-16 h-[110px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
