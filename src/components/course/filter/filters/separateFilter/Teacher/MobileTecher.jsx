import React, { useState, useEffect, useRef } from "react";
import { TeacherApi } from "../../../../../../core/services/api/Filter/Teacher.api";
import { MobileTeacherFilter } from "./MobileTeacherFilter";

const MobileTeacher = ({ onSelectTeacher, selectedTeacher }) => {
  const [teacher, setTeacher] = useState([]);
  const [open, setOpen] = useState(false);
  const drop = useRef(null);


  const AxiosTeacher = async () => {
    try {
      const res = await TeacherApi();
      setTeacher(res || []);
    } catch (err) {
      console.error("خطا در دریافت texher:", err);
    }
  };

  useEffect(() => {
    AxiosTeacher();
  }, []);



  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);


const handleSelectTeacher = (teacher) => {
  onSelectTeacher(teacher); 
  setOpen(false);
};



  const handleClick = (e) => {
    if (drop.current && !drop.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const toggle = () => {
    setOpen((value) => !value);
  };

  return (
    <div ref={drop}>
      <MobileTeacherFilter
        selectedTeacher={selectedTeacher}   
        teacher={teacher}
        onSelectTeacher={handleSelectTeacher}
        open={open}
        toggle={toggle}
      />
    </div>
  );
};

export { MobileTeacher };
