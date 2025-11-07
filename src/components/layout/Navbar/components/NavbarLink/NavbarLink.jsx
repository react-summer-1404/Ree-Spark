import React, { useState } from "react";
import { FiArrowDown, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavbarMenu from "./Menu/NavbarMenu";
import AuthButton from "./components/AuthButton";
import NavbarLinks from "./components/NavbarLinks";
import MenuButtonMobile from "./components/MenuButtonMobile";
import ProfileMobile from "./components/ProfileMobile";
import { MenuHesder } from "./components/MenuHesder";
import { getItem } from "../../../../../core/services/storage/storage.api";

const NavbarLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = getItem("token");
  return (
    <div>
      <div className="flex gap-1 ml-2">
        <div
          className="sm:flex px-1 sm:h-[48px] dark:bg-slate-300 bg-[#2F2F2F] 
                sm:rounded-[56px] justify-around items-center  h-[48px] rounded-full flex"
        >
          {/* دکمه منو موبایل */}
          <MenuButtonMobile setIsModalOpen={setIsModalOpen} />
          {/* دکمه ثبت‌نام دسکتاپ */}
          {token ? (
            <>
              <MenuHesder />
            </>
          ) : (
            <AuthButton />
          )}
          {/* لینک‌های دسکتاپ */}
          <NavbarLinks />
        </div>

        {/* پروفایل موبایل */}
        <ProfileMobile />
      </div>
      {/*//// Menu///// */}
      <NavbarMenu setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default NavbarLink;
