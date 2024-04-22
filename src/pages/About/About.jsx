import React, { useEffect } from "react";
import s from "./About.module.scss";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/Product/product";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <div className={s.product}>
      {product && (
        <div className={s.product_main}>
          <div className={s.product_main_left}>
            <img
              src={product.thumbnail}
              alt=""
              className={s.product_main_left_img}
            />
            <p className={s.product_main_left_discount}>
              {product.discountPercentage}%
            </p>
          </div>
          <div className={s.product_main_right}>
            <h1 className={s.product_main_right_title}>{product.title}</h1>
            <h3 className={s.product_main_right_h3}>Бренд: {product.brand}</h3>
            <h3 className={s.product_main_right_h3}>
              Категория: {product.category}
            </h3>
            <h3 className={s.product_main_right_h3}>{product.price}$</h3>
            <h3 className={s.product_main_right_h3}>{product.rating}</h3>
            <p className={s.product_main_right_text}>{product.description}</p>
            <p className={s.product_main_right_text}>
              Всего в наличии: {product.stock}
            </p>
            <Link to="/" className={s.product_main_right_link}>
              Назад
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
