import React, { useState, useMemo, useEffect, useRef } from "react";
import { CatgoryApi } from "../../../../../core/services/api/Filter/Catgory.api";
import { Filter } from "../Filter";

const Category = ({ Search, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const ref = useRef(null);

  const AxiosCategories = async () => {
    try {
      const res = await CatgoryApi();
      setCategories(res || []);
    } catch (err) {
      console.error("خطا در دریافت کتگوری‌ها:", err);
    }
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const filteredCategories = useMemo(() => {
    if (!selectedCategory) return categories;
    return categories.filter(c => c.newsCatregoryName === selectedCategory);
  }, [selectedCategory, categories]);

  useEffect(() => {
    AxiosCategories();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = () => setIsOpen(value => !value);

  const select = (cate) => {
    setSelectedCategory(cate || []);
    if (typeof onSelectCategory === "function") {
      onSelectCategory(cate);
    }
    setIsOpen(false);
  };

  return (
    <div ref={ref}>
      <Filter
        Search={Search}
        isOpen={isOpen}
        selectedCategory={selectedCategory}
        toggle={toggle}
        categories={filteredCategories}
        select={select}
      />
    </div>
  );
};

export { Category };
