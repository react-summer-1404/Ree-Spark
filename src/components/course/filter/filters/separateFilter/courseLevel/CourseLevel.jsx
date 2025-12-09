import React, { useState, useEffect, useRef } from "react";
import { CourseLevelApi } from "../../../../../../core/services/api/Filter/CourseLevel.api";
import CourseLevelFilter from "./CourseLevelFilter";

const CourseLevel = ({selectedLevels,onSelectLevels}) => {
  const [levels, setLevels] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const AxiosLevels = async () => {
    try {
      const res = await CourseLevelApi();
      setLevels(res || []);
    } catch (err) {
      console.error("خطا در دریافت لول:", err);
    }
  };
  useEffect(() => {
    AxiosLevels();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const toggle = () => setOpen((value) => !value);

 const handleSelect = (level) => {
  if (onSelectLevels) onSelectLevels(level);
  setOpen(false);
};

  return (
    <div ref={ref}>
      <CourseLevelFilter
        open={open}
        toggle={toggle}
        onSelectLevels={handleSelect}
        selectedLevels={selectedLevels}
        levels={levels}
      />
    </div>
  );
};

export { CourseLevel };
