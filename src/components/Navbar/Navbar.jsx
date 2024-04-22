import { useState } from "react";
import s from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productsSort } from "../../redux/Products/products";

const Navbar = ({ search, setSearch }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [name, setName] = useState(true);
  const [price, setPrice] = useState(false);
  const [stock, setStock] = useState(false);

  function addSort(sort) {
    setName(false);
    setPrice(false);
    setStock(false);

    sort === "title"
      ? setName(true)
      : sort === "price_count"
      ? setPrice(true)
      : setStock(true);

    dispatch(productsSort(sort));
  }

  return (
    <div className={s.nav__main}>
      <h2 className={s.nav__main_title}>Мои товары</h2>
      <div className={s.nav__main_sort}>
        <h2 className={s.nav__main_sort_title}>Сортировка</h2>
        <ul className={s.nav__main_sort_list}>
          <li
            className={s.nav__main_sort_list_item}
            onClick={() => addSort("title")}
          >
            Название
          </li>
          <li
            className={s.nav__main_sort_list_item}
            onClick={() => addSort("price")}
          >
            Цена
          </li>
          <li
            className={s.nav__main_sort_list_item}
            onClick={() => addSort("stock")}
          >
            Количество
          </li>
        </ul>
      </div>
      <div className={s.nav__main_search}>
        <h3 className={s.nav__main_search_title}>Что ищете?</h3>
        <input
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className={s.nav__main_search_input}
        />
      </div>
    </div>
  );
};

export default Navbar;
