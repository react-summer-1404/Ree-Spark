import React, { useEffect, useState } from "react";
import { WellcomePanel } from "../components/DashBoard/WellcomePanel";
import { ProfileInfo } from "../components/DashBoard/ProfileInfo";
import MyCoursePanel from "../components/DashBoard/MyCoursePanel";
import { MyReserve } from "../components/DashBoard/MyReserve";
import { CommedPanel } from "../components/DashBoard/CommedPanel";

import GetProfileInfoApi from "../core/services/api/User/GetProfileInfo.api";

const Panel = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetProfileInfoApi(); 
        setProfile(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
        setError("خطا در دریافت اطلاعات پروفایل");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 dark:text-gray-300">در حال بارگذاری...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }



return (
  <div>
    {profile ? (
      <h1>{profile.fName}</h1>
    ) : (
      <p>در حال دریافت اطلاعات پروفایل...</p>
    )}

    <div className="w-[253px] h-[246px] absolute top-[200px] left-[28px] bg-[#F6F6F6] dark:bg-gray-600 rounded-3xl">
      <ProfileInfo />
    </div>

    <div className="w-[801px] h-[246px] absolute top-[200px] left-[305px] bg-[#F6F6F6] dark:bg-gray-600 rounded-3xl">
      <MyCoursePanel />
    </div>

    <div className="w-[662px] h-[467px] absolute top-[470px] left-[443px] bg-[#F6F6F6] dark:bg-gray-600 rounded-3xl overflow-y-auto">
      <MyReserve />
    </div>

    <div className="w-[392px] h-[467px] rounded-3xl bg-[#F6F6F6] dark:bg-gray-600 absolute top-[469px] left-6">
      <CommedPanel />
    </div>
  </div>
);

};

export { Panel };
