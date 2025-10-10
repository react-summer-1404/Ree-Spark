import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="border-2 border-red-500 w-[1440px] flex justify-around ">
        <div className="border border-blue-600 w-[748px] h-[704px] rounded-[32px] mt-8 mb-6 ml-8"></div>
        <Outlet />
      </div>
    </div>
  );
};

export { AuthLayout };
