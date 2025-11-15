import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="relative">
      <div dir="rtl" className="flex flex-col gap-8 ">
        <h1 className="text-2xl font-bold text-right mt-6 mr-6">پروفایل من</h1>
        <div className="border-l border-[#DCDCDC] w-[25%] h-[760px] flex flex-col gap-4">
          <NavLink
            to={""}
            end
            className={({ isActive }) =>
              `${
                isActive && "bg-[#F1F1F1] text-[#3772FF]"
              } mx-auto w-[190px] rounded-[48px] py-3 px-4 text-[#707070]`
            }
          >
            اطلاعات حساب کاربری
          </NavLink>
          <NavLink
            to={"Picture"}
            className={({ isActive }) =>
              `${
                isActive && "bg-[#F1F1F1] text-[#3772FF]"
              } mx-auto w-[95px] rounded-[48px] py-3 px-4 text-[#707070]`
            }
          >
            عکس ها
          </NavLink>
          <NavLink
            to={"location"}
            className={({ isActive }) =>
              `${
                isActive && "bg-[#F1F1F1] text-[#3772FF]"
              } mx-auto w-[130px] rounded-[48px] py-3 px-4 text-[#707070]`
            }
          >
            محل سکونت
          </NavLink>
          <NavLink
            to={"links"}
            className={({ isActive }) =>
              `${
                isActive && "bg-[#F1F1F1] text-[#3772FF]"
              } mx-auto w-[90px] rounded-[48px] py-3 px-4 text-[#707070]`
            }
          >
            لینک ها
          </NavLink>
        </div>
      </div>{" "}
      <div className="w-[70%] absolute top-24 left-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
