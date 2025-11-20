// Category.jsx
import React, { useState, useEffect, useRef } from "react";
import { CatgoryApi } from "../../../../../core/services/api/Filter/Catgory.api";
import { Filter } from "../Filter";

export const Category = ({ Search, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const res = await CatgoryApi();
      setCategories(res.news || []);
    })();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggle = () => setIsOpen(value => !value);
  const select = (cate) => {
    setSelectedCategory(cate);
    onSelectCategory(cate);
    setIsOpen(false);
  };

  return (
    <div ref={ref}>
      <Filter
        Search={Search}
        isOpen={isOpen}
        selectedCategory={selectedCategory}
        toggle={toggle}               
        categories={categories}
        select={select}               
      />
    </div>
  );
};