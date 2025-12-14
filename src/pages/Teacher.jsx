import React, { useEffect, useState } from "react";
import { TeacherCard } from "../components/teacher/TeacherCard";
import { GetAllTeacher } from "../core/services/api/Teacher/GetAllTeacher.api";
import Loading from "../components/common/Loading";
import { AnimatePresence } from "framer-motion";
import { WelcomeScreen } from "../components/wellcome/WelcomeScreen";

const Teacher = () => {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
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

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0].type;

    if (navType === "reload") {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setShowLanding(true);
      }, 2000);
    } else {
      setShowLanding(true);
    }
  }, []);
  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            wellcomeMessage={"صفحه اساتید"}
            onFinish={() => {
              setShowWelcome(false);
              setShowLanding(true);
            }}
          />
        )}
      </AnimatePresence>
      {showLanding && (
        <div className="h-[540px] flex justify-center gap-6 items-center flex-wrap">
          {loading && (
            <div className="w-full h-full flex items-center justify-center">
              <Loading />
            </div>
          )}

          {!loading && teacher.length === 0 && (
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-red-500 dark:text-white text-xl font-bold">
                خطا در برقراری ارتباط
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
      )}
    </>
  );
};

export { Teacher };
