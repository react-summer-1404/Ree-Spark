import DarkMode from "../../../../common/Darkmode/DarkMode.jsx";
import { FiBell } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyUnseenNotifications } from "../../../../../core/services/api/notification/NoSeenotification.api.js";

const NavbarAction = () => {
  const [unseenCount, setUnseenCount] = useState(0);

  useEffect(() => {
    const fetchUnseen = async () => {
      try {
        const notifications = await getMyUnseenNotifications();

        setUnseenCount(Array.isArray(notifications) ? notifications.length : 0);
      } catch (error) {
        console.error("Notification fetch error:", error);
      }
    };

    fetchUnseen();
  }, []);

  return (
    <div className="hidden gap-1 w-auto ml-1 lg:w-[220px] sm:flex md:w-[100px]">
      <DarkMode />

      <Link
        to={"/dashboard/notification"}
        className="w-[48px] h-[48px] border rounded-full flex justify-center items-center relative"
      >
        <FiBell size={30} className="dark:text-white" />

        {unseenCount > 0 && (
          <div
            className="bg-red-500 min-w-[16px] h-[16px] px-1
                       absolute top-9 right-1 rounded-full
                       flex items-center justify-center"
          >
            <span className="text-white text-[10px]">
              {unseenCount}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default NavbarAction;
