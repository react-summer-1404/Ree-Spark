import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { BlogCategoryFilter } from "./BlogCategoryFilter";
import GetCategoryApi  from "../../../../core/services/api/Blog/GetCategoryApi"; 

const BlogCategory = ({ onSelectedCategory, selectedCategory }) => {
  const [listTech, setListTech] = useState([]);
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  const AxiosCategories = async () => {
    try {
      const res = await GetCategoryApi();
      setListTech(res || []);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    AxiosCategories();
  }, []);

  const handleClick = (e) => {
    if (drop.current && !drop.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

const handleSelect = (id) => {
  if (onSelectedCategory) onSelectedCategory(id);
  setOpen(false);
};

  return (
    <div ref={drop}>
      <BlogCategoryFilter
        selectedCategory={selectedCategory}
        listTech={listTech}
        onSelectedCategory={handleSelect}
        open={open}
        toggle={() => setOpen(!open)}
      />
    </div>
  );
};

export {BlogCategory}