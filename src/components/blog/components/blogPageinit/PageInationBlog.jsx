import { ChevronLeft, ChevronRight } from "lucide-react";

const PageInationBlog = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center dark:bg-slate-300 bg-gray-100 rounded-xl w-[322px] h-12 mt-10 mx-auto absolute top-[1800px] sm:top-[1600px] right-20 sm:right-[100px] md:right-[200px] lg:right-[724px] ">
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
