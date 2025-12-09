import React, { useEffect, useState } from "react";
import { TeacherCard } from "../components/teacher/TeacherCard";
import { GetAllTeacher } from "../core/services/api/Teacher/GetAllTeacher.api";
import Loading from "../components/common/Loading";

const Teacher = () => {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await GetAllTeacher();
        setTeacher(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("GetAllTeacher API Error:", error);
        setTeacher([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-[540px] flex justify-center gap-6 items-center flex-wrap">
      {loading && (
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      )}

      {!loading && teacher.length === 0 && (
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="text-blue-500 dark:text-white text-xl font-bold">
            رزروی وجود ندارد
          </h2>
        </div>
      )}

      {!loading &&
        teacher.length > 0 &&
        teacher.map((item) => (
          <div key={item.teacherId}>
            <TeacherCard
              name={item.fullName || "نام نامشخص"}
              userId={item.teacherId}
              avatar={item.pictureAddress || "/default-avatar.png"}
            />
          </div>
        ))}
    </div>
  );
};

export { Teacher };
