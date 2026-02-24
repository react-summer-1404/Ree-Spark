import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { likeCommentApi } from "../../../core/services/api/CourseDetail.api/CourseComment/LikeAndDisLike/LikeComment.api";
import { dislikeCommentApi } from "../../../core/services/api/CourseDetail.api/CourseComment/LikeAndDisLike/DisLikeComment.api";
import { getItem } from "../../../core/services/storage/storage.api";

const LikeandDisLikeComment = ({ comment, refreshComments }) => {
  const token = getItem("token");

  const [userReaction, setUserReaction] = useState(null);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [dislikeCount, setDislikeCount] = useState(comment.disslikeCount);

  const handleLike = async () => {
    try {
      if (!token) return;
      if (userReaction === "like") return;

      await likeCommentApi(comment.id);

      if (userReaction === "dislike") {
        setDislikeCount(dislikeCount - 1);
      }

      setUserReaction("like");
      setLikeCount(likeCount + 1);

      refreshComments();
    } catch (error) {
      // ارور بدون toast
      console.error("خطا در ثبت لایک:", error);
    }
  };

  const handleDislike = async () => {
    try {
      if (!token) return;
      if (userReaction === "dislike") return;

      await dislikeCommentApi(comment.id);

      if (userReaction === "like") {
        setLikeCount(likeCount - 1);
      }

      setUserReaction("dislike");
      setDislikeCount(dislikeCount + 1);

      refreshComments();
    } catch (error) {
      // ارور بدون toast
      console.error("خطا در ثبت دیس‌لایک:", error);
    }
  };

  return (
    <div className="w-[103px] flex gap-6">
      <div className="flex gap-1 items-center mt-1">
        <div className="text-[17px]">{dislikeCount}</div>
        <button onClick={handleDislike}>
          <AiFillDislike
            size={20}
            className={
              userReaction === "dislike"
                ? "text-red-500"
                : "text-black dark:text-white"
            }
          />
        </button>
      </div>

      <div className="flex gap-1 items-center">
        <div className="text-[17px]">{likeCount}</div>
        <button onClick={handleLike}>
          <AiFillLike
            size={20}
            className={
              userReaction === "like"
                ? "text-green-500"
                : "text-black dark:text-white"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default LikeandDisLikeComment;
