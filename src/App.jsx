import { useState, useEffect } from "react";
import "./assets/scss/main.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./redux/Products/products";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import MainPage from "./pages/MainPage/MainPage";

function App() {

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerpage, setpostsPerpage] = useState(12)
  const lastPostIndex = currentPage * postsPerpage;
  const firstPostIndex = lastPostIndex - postsPerpage;
  const sortproducts = products?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  const currentPost = sortproducts?.slice(firstPostIndex, lastPostIndex);
  


  return (
    <div className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={ <MainPage search={search} currentPage={currentPage} setSearch={setSearch} sortproducts={sortproducts}
           currentPost={currentPost} postsPerPage={postsPerpage} setCurrentPage={setCurrentPage}/> } />
          <Route path="/about/:id" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
