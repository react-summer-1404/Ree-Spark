import { FileTextIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaSmile, FaTelegramPlane } from "react-icons/fa";

const CommentModal = ({ closeModal }) => {
  const [openInputIndex, setOpenInputIndex] = useState(null);
  const inputRefs = useRef([]);

  const [showCommentInput, setShowCommentInput] = useState(false);
  const commentInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openInputIndex !== null &&
        inputRefs.current[openInputIndex] &&
        !inputRefs.current[openInputIndex].contains(event.target)
      ) {
        setOpenInputIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openInputIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCommentInput &&
        commentInputRef.current &&
        !commentInputRef.current.contains(event.target)
      ) {
        setShowCommentInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCommentInput]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] dark:bg-slate-800 h-[653px] min-w-md p-6 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-full overflow-y-auto pr-2">
          <div className="w-full flex flex-wrap justify-between mb-6">
            <button
              onClick={closeModal}
              className="flex items-center fixed justify-center gap-3 w-[80px] md:w-[100px] h-[40px] border-red-600 border-2 rounded-full text-red-600 dark:text-white"
            >
              <div>بستن</div>
              <div className="mt-1">✕</div>
            </button>
            <div className="flex gap-2 w-[100%] items-center justify-end flex-wrap-reverse text-right">
              <div className="w-[100px]"></div>
              <div className="w-[160px] text-[#707070] font-bold text-[18px]">
                <div>( دوره جاوااسکریپت )</div>
              </div>
              <div className="text-[24px] font-bold dark:text-white">
                نظرات دانشجو ها و اساتید
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="w-full gap-y-5 flex flex-wrap justify-end">
            <div className="w-full flex justify-end mb-5">
              {!showCommentInput && (
                <button
                  onClick={() => setShowCommentInput(true)}
                  className="w-[107px] h-[40px] bg-[#3772FF] rounded-[40px] flex items-center justify-center text-white gap-2"
                >
                  <div>نظر شما</div>
                  <FileTextIcon size={20} />
                </button>
              )}
              {showCommentInput && (
                <div
                  ref={commentInputRef} dir="rtl"
                  className="md:w-[480px] w-[360px] h-[72px] flex rounded-3xl gap-2 border-2 border-[#3772FF] p-2 bg-white dark:bg-slate-700"
                >
                  <div className="flex w-[95px] h-[55px] gap-1 items-center justify-center">
                    <div className="w-[40px] h-[40px] bg-blue-600 border-2 flex justify-center items-center rounded-full text-white">
                      <FaTelegramPlane size={20} />
                    </div>
                    <div className="w-[40px] h-[40px] border-2 flex justify-center items-center rounded-full text-blue-600">
                      <FaSmile size={25} />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="border-b-2">
                      <input
                        className="w-full h-full mb-1 text-[15px] resize-none outline-none bg-transparent text-right dark:text-white"
                        placeholder="عنوان مورد نظر خود را بنویسید.."
                      />
                    </div>
                    <div className="h-[40px]">
                      <input
                        className="w-full h-full text-[15px] resize-none outline-none bg-transparent text-right dark:text-white"
                        placeholder="متن مورد نظر خود را بنویسید...."
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={item}
                className="flex flex-wrap justify-end gap-2 mb-10"
              >
                <div className="w-[100px] flex flex-wrap justify-end">
                  <div
                    className="text-[14px] w-[100px] h-[20px] line-clamp-1 dark:text-white"
                    dir="rtl"
                  >
                    مهشید محمدزاده اصغرآبادی
                  </div>
                  <div className="text-[#707070] text-[12px]">
                    29 اردیبهشت 1403
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-[#ccc]">
                  <img src="" alt="" />
                </div>

                <div className="w-full flex justify-end text-[18px] font-bold dark:text-white">
                  <div>دوره خیلی خوبی بود واقعا لذت بردم</div>
                </div>

                <div className="flex justify-end">
                  <div className="w-[85%] text-right dark:text-white">
                    واقعا عالی بود. هم استادش و هم کلاس‌ها منظم برگزار شدن و
                    اصلاً از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوااسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن
                  </div>
                </div>

                <div className="flex w-[75%] md:flex-nowrap flex-wrap justify-end gap-3 mt-3">
                  <div className="flex w-[100%]" dir="rtl">
                    {openInputIndex !== index && (
                      <button
                        onClick={() => setOpenInputIndex(index)}
                        className="w-[99px] h-[40px] border-2 text-[#3772FF] border-[#3772FF] rounded-[40px] p-2 dark:text-white"
                      >
                        جواب دادن
                      </button>
                    )}
                    {openInputIndex === index && (
                      <div
                        ref={(elem) => (inputRefs.current[index] = elem)}
                        className="md:w-[480px] w-[360px] h-[72px] flex rounded-3xl gap-2 border-2 border-[#3772FF] p-2 bg-white dark:bg-slate-700"
                      >
                        <div className="flex w-[95px] h-[55px] gap-1 items-center justify-center">
                          <div className="w-[40px] h-[40px] bg-blue-600 border-2 flex justify-center items-center rounded-full text-white">
                            <FaTelegramPlane size={20} />
                          </div>
                          <div className="w-[40px] h-[40px] border-2 flex justify-center items-center rounded-full text-blue-600">
                            <FaSmile size={25} />
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="border-b-2">
                            <input
                              className="w-full h-full mb-1 text-[15px] resize-none outline-none bg-transparent text-right dark:text-white"
                              placeholder="عنوان مورد نظر خود را بنویسید.."
                            />
                          </div>
                          <div className="h-[40px]">
                            <input
                              className="w-full h-full text-[15px] resize-none outline-none bg-transparent text-right dark:text-white"
                              placeholder="متن مورد نظر خود را بنویسید...."
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-5 w-[110px] h-[30px] items-end dark:text-white">
                    <div className="flex gap-2 items-center">
                      <AiFillLike size={25} />
                      <div>5</div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <AiFillDislike size={25} />
                      <div>9</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
