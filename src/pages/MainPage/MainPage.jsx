import React from "react";
import Main from "../../components/Main/Main";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";

const MainPage = ({
  search,
  currentPage,
  setSearch,
  sortproducts,
  currentPost,
  postsPerPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Main currentPost={search ? sortproducts : currentPost} />
      <Pagination
        sortproducts={sortproducts}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MainPage;
