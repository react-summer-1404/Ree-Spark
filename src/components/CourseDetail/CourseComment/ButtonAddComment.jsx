import { FileTextIcon } from "lucide-react";
import React, { useState } from "react";
import AddCommentApi from "../../../core/services/api/CourseDetail.api/CourseComment/AddCommentApi";
import { getItem } from "../../../core/services/storage/storage.api";
import toast from "react-hot-toast";

const ButtonAddComment = ({ courseId, setComments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    console.log("ارسال نظر کلیک شد ✅");

    const token = getItem("token");
    if (!token) {
      toast.error("برای ثبت نظر باید وارد حساب شوید");
      return;
    }

    if (!title.trim() || !description.trim()) {
      toast.error("عنوان و توضیحات نمی‌توانند خالی باشند");
      return;
    }

    try {
      const res = await AddCommentApi(courseId, title, description);

      setComments((prev) => [...prev, res]);

      toast.success("نظر شما ثبت شد ✅");

      // ریست فرم
      setIsOpen(false);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("خطا در ثبت نظر:", error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-[360px] h-[280px] sm:w-[40%] sm:h-[260px] bg-[#3772FF] flex justify-center items-center rounded-[24px]"
      >
        <div className="flex justify-center w-[170px] flex-wrap gap-6">
          <div className="text-white flex gap-2 w-[80px] flex-wrap justify-center">
            <FileTextIcon />
            <div className="text-[18px]">نظر شما</div>
          </div>
          <div className="text-[15px] h-9 text-white">
            برای نظر دادن کلیک کنید
          </div>
        </div>
      </button>

      {/* modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          dir="rtl"
        >
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center text-gray-700">
              افزودن نظر
            </h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="عنوان نظر"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات نظر"
              className="border border-gray-300 rounded p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 rounded-[30px] p-2 hover:bg-gray-400"
              >
                انصراف
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white rounded-[30px] p-2 hover:bg-blue-700"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonAddComment;
