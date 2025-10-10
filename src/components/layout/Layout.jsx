import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] flex justify-center flex-col">
        <div className="border border-red-500 h-[50px] mt-6 ">
          <Navbar />
        </div>

        <main className="border-2 border-green-500">
          <Outlet />
        </main>

        <div className="border border-blue-600 mb-16 h-[110px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
