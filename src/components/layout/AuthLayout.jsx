import React from "react";
import { Outlet } from "react-router-dom";




const AuthLayout = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" w-11/12 flex justify-center gap-6  ">
          {/*  */}

          <div className="w-[748px] bg-[#F1F1F1] h-[704px] rounded-[32px] mt-8 mb-6 ml-8 hidden sm:block">
            
          </div>

          {/*  */}
          <div className="border-2 border-green-500 mt-8 mb-6 md:mr-8 h-[704px] w-[500px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export { AuthLayout };
