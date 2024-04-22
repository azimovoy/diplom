import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/Products/products";
import s from "./Main.module.scss";
import Sceleton from "../Sceleton/Sceleton";

const Main = ({ currentPost }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
    }, 50000);
  }, []);

  return (
    <>
      <div className={s.main__box}>
        {currentPost ? (
          currentPost.map((item) => (
            <div key={item.id} className={s.main__box_item}>
              <img
                src={item.thumbnail}
                alt=""
                className={s.main__box_item_image}
              />
              <p className={s.main__box_item_discount}>
                {item.discountPercentage}%
              </p>
              <h2 className={s.main__box_item_name}>{item.title}</h2>
              <div className={s.main__box_item_block}>
                <div className={s.main__box_item_main}>
                  <p className={s.main__box_item_brand}>{item.brand}</p>
                  <p className={s.main__box_item_number}>
                    Количество: {item.stock}
                  </p>
                  <h3 className={s.main__box_item_price}>
                    Цена: {item.price}$
                  </h3>
                </div>
                <Link
                  to={`/about/${item.id}`}
                  className={s.main__box_item_more}
                >
                  <h3 className={s.main__box_item_more_title}>Подробнее</h3>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <Sceleton />
        )}
      </div>
    </>
  );
};

export default Main;
