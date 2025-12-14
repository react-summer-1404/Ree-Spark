import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Chat from "../chat/Chat";
import AiChat from "../chat/AiChat";

const Layout = () => {
  return (
    <div className="flex justify-center bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-screen overflow-hidden">
      <div className="w-[1440px] flex justify-center flex-col">
        <div className="h-[50px] mt-6 ">
          <Navbar />
        </div>

        <main className=" relative">
          <div className="w-[50px] h-8 flex flex-col gap-2 fixed right-5 bottom-24 z-20">
            <Chat/>
            
          </div><div className=" h-8 flex flex-col gap-2 fixed right-6 bottom-12 z-20"><AiChat/></div>
          <Outlet />
        </main>

        <div className=" mb-16 h-[110px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { Layout };
