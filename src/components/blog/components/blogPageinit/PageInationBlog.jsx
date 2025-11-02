import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";

const PageInationBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // مثلا ۵ صفحه داریم

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex justify-center bg-gray-100 rounded-xl w-[322px] h-12 absolute top-[2009px] left-[394px]">
      {/* فلش قبل */}
      <button
        onClick={handlePrev}
        className="p-2 hover:bg-gray-200 text-blue-500 rounded-full disabled:opacity-40"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={25} />
      </button>

      {/* شماره صفحات */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-11 h-12 rounded-md flex items-center justify-center transition-all duration-200 ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : " hover:bg-blue-200"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* فلش بعد */}
      <button
        onClick={handleNext}
        className="p-2 hover:bg-gray-200 text-blue-500 rounded-full disabled:opacity-40"
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={25} />
      </button>
    </div>
  );
};

export { PageInationBlog };
