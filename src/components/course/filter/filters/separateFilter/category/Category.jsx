import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { CategoryFilter } from "./CategoryFilter";
import { CatgoryApi } from "../../../../../../core/services/api/Filter/Catgory.api"; 

const Category = ({ onSelectListTech, selectedListTech }) => {
  const [listTech, setListTech] = useState([]);
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  const AxiosCategories = async () => {
    try {
      const res = await CatgoryApi();
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
    if (selectedListTech.includes(id)) {
      onSelectListTech(selectedListTech.filter((item) => item !== id));
    } else {
      if (selectedListTech.length > 2
      ) {
      toast.error("حداکثر سه تا");
        return;
      }
      onSelectListTech([...selectedListTech, id]);
    }
  };

  return (
    <div ref={drop}>
      <CategoryFilter
        selectedListTech={selectedListTech}
        listTech={listTech}
        onSelectListTech={handleSelect}
        open={open}
        toggle={() => setOpen(!open)}
      />
    </div>
  );
};

export {Category}