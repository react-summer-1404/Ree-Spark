import React from "react";
import { SortResponsive } from "../Sort/SortResponsive";
const MobileSortCore = ({
  setSortType,
  sortType,
  setSortingCol,
  sortingCol,
  onClose,
}) => {
  const handleChengSort = (type, col) => {
    setSortType(type);
    setSortingCol(col);
  };

  return (
    <div>
      <SortResponsive
        sortType={sortType}
        sortingCol={sortingCol}
        onChangeSort={handleChengSort}
        onClose={onClose}
      />
    </div>
  );
};

export default MobileSortCore;
