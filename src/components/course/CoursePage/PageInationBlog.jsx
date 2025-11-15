import { ChevronLeft, ChevronRight } from "lucide-react";
import { addCommas, digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
const PageInationBlog = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages)   onPageChange(parseInt(toEnglishNumber(currentPage)) + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1 );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center bg-gray-100 rounded-xl w-[322px] h-12 mt-10 mx-auto absolute top-[1970px] right-[724px] dark:bg-slate-700">
      <button
        onClick={handlePrev}
        className="p-2 hover:bg-gray-200 text-blue-500 rounded-full disabled:opacity-40"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={25} />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
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
export default PageInationBlog;
