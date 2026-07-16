import { FileTextIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import CommentModal from "./CommentModal";
import getCourseCommentApi from "../../../core/services/api/CourseDetail.api/CourseComment/getCommentCourse.api";
import LikeandDisLikeComment from "./LikeandDisLikeComment";
import ButtonAddComment from "./ButtonAddComment";
import { comment } from "postcss";

const CourseComment = ({ courseId, courseData }) => {
  const [isOpenModalComment, setisOpenModalComment] = useState(false);
  const [comments, setComments] = useState([]);

  const openModal = () => setisOpenModalComment(true);
  const closeModal = () => setisOpenModalComment(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        console.log("🔎 courseId:", courseId);
        const res = await getCourseCommentApi(courseId);
        console.log(res);

        if (Array.isArray(res)) {
          setComments(res);
        } else if (res?.comments) {
          setComments(res.comments);
        } else {
          console.warn(" هیچ آرایه‌ای از کامنت‌ها پیدا نشد:", res);
        }
      } catch (error) {
        console.error("خطا در گرفتن کامنت‌ها:", error);
      }
    };
    if (courseId) fetchComments();
  }, [courseId]);

  // console.log(" state comments:", comments);

  return (
    <div className="flex flex-wrap w-[100%] justify-end gap-y-7">
      <div className="text-[20px] text-[#707070] font-bold ">
        نظرات دانشجو ها و اساتید
      </div>

      <div className="flex justify-center sm:justify-end gap-[10px] w-[100%] flex-wrap-reverse sm:flex-nowrap ">
        {comments.length > 0 ? (
          comments.slice(0, 2).map((comment) => (
            <div
              key={comment.id}
              className="w-[360px] sm:w-[40%] h-[260px] bg-[#F6F6F6] rounded-[24px] flex justify-center items-center flex-wrap"
            >
              <div
                className="flex text-right p-2 gap-y-4 flex-wrap w-[100%] h-[157px] dark:text-white"
                dir="rtl"
              >
                <div className="w-[100%] h-[26px] text-[18px] font-bold">
                  {comment.title ?? comment.value ?? "بدون عنوان"}
                </div>
                <div
                  className="text-[#707070] text-[14px] line-clamp-6"
                  dir="rtl"
                >
                  {comment.describe ?? comment.description}
                </div>
              </div>

              <div className="w-[100%] h-[41px] mr-1 ml-1 flex items-center justify-between">
                <LikeandDisLikeComment
                  comment={comment}
                  setComments={setComments}
                />
                <div className="flex gap-2">
                  <div className="w-[100px] flex flex-wrap justify-end">
                    <div
                      className="text-[14px] w-[100px] h-[20px] line-clamp-1"
                      dir="rtl"
                    >
                      {comment.author ?? "بدون شناسه"}
                    </div>
                    <div className="text-[#707070] text-[12px]">
                      {comment.insertDate &&
                        new Date(comment.insertDate).toLocaleDateString(
                          "fa-IR"
                        )}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#ccc]">
                    {comment.pictureAddress && (
                      <img
                        src={comment.pictureAddress}
                        alt={comment.author}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-[#707070]">هیچ نظری ثبت نشده است</div>
        )}

        <ButtonAddComment courseId={courseId} setComments={setComments} />
      </div>

      <div className="w-[100%] flex justify-center">
        <button
          onClick={openModal}
          className="w-[125px] h-[29px] rounded-full bg-[#2F2F2F] text-white"
        >
          مشاهده بیشتر
        </button>
        {isOpenModalComment && (
          <CommentModal
            closeModal={closeModal}
            courseId={courseId}
            courseData={courseData}
            comments={comments}
            setComments={setComments}
          />
        )}
      </div>
    </div>
  );
};

export default CourseComment;
