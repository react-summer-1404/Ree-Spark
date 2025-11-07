import React from "react";
import DiscriptionStar from "./DiscriptionStar";
import CopyLink from "./copyLink";

const StarAndcopyLink = () => {
  return (
    <div className="flex items-center gap-10 flex-wrap ">
      {/* /// */}
        <CopyLink />   
      {/* // */}
        <DiscriptionStar rating={3} />
      {/* /// */}
    </div>
  );
};

export default StarAndcopyLink;
