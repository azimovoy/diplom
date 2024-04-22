import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products/products";
import productSlice from "./Product/product";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
  },
});
