import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GetAllTeacher } from "../../../../core/services/api/Teacher/GetAllTeacher.api";
import { Teacher } from "./Teacher";
import Loading from "../../../common/Loading"; 

const TeacherBody = () => {
const [teacher, setTeacher] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await GetAllTeacher();
       console.log("Data from API:", res);
      setTeacher(res); 
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت اساتید");
    }
  };

  useEffect(() => {
    fetchTeachers();
      console.log("USEEFFECT FIRED");
  }, []);

  console.log("TEACHERS STATE:", teacher);

  return (
    <div className="">
    {teacher.map(t => (
  <Teacher
    key={t.teacherId}
    name={t.fullName}
    img={t.pictureAddress}
    linkedin={t.linkdinProfileLink}
  />
))}

    </div>
  );
};

export { TeacherBody };
