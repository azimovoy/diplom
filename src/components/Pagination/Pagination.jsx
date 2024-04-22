import React from "react";
import s from "./Pagination.module.scss";
import { useLocation } from "react-router-dom";

const Pagination = ({ sortproducts, postsPerPage, setCurrentPage, currentPage }) => {
  const sortproductsLength = sortproducts?.length;
  const pages = [];
  for (let i = 1; i <= Math.ceil(sortproductsLength / postsPerPage); i++) {
    pages.push(i);
  }


  return (
    <div className={s.block}>
      {pages &&
        pages.map((page, index) => (
          <button
            className={
              page === currentPage ? s.block_item + " " + s.active : s.block_item
            }
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
