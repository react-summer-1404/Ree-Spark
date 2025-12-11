import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import { GetTeacherDetail } from "../core/services/api/Teacher/GetTeacherDetail.api";

const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await GetTeacherDetail(id);
      console.log("DETAIL:", result);
      if (result && result.teacherId) {
        setData(result);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("TeacherDetail fetch error:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <h2 className="text-xl text-red-600 font-bold">اطلاعاتی یافت نشد</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[900px] mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
      {/* Header */}
      <div className="flex justify-end items-center gap-6 border-b pb-6">
        <div className="text-right">
          <h2 className="text-2xl font-semibold text-gray-800">
            {data.fullName || "نام نامشخص"}
          </h2>
          <p className="text-gray-500">{data.email || "ایمیل ثبت نشده"}</p>
        </div>

        <img
          src={data.pictureAddress || "/default-avatar.png"}
          alt={data.fullName}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
        />
      </div>

      {/* Courses */}
      <div dir="rtl" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.courses && data.courses.length > 0 ? (
          data.courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-gray-50 rounded-xl shadow-sm border p-4 flex flex-col gap-3"
            >
              <img
                src={course.imageAddress || "/default-course.png"}
                alt={course.title}
                className="w-full h-32 object-cover rounded-lg"
              />

              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-500 text-sm">{course.miniDescribe}</p>
              <div className="text-gray-400 text-xs">  ایدی کورس:{course.courseId}</div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">هیچ دوره‌ای ثبت نشده است</p>
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="w-full py-3 mt-6 bg-blue-500 shadow-lg text-white rounded-xl hover:bg-blue-700 transition-all duration-300"
      >
        بازگشت
      </button>
    </div>
  );
};

export { TeacherDetail };
