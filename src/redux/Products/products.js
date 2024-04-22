import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: null,
};

export const getProducts = createAsyncThunk("goods/getProducts", async (id) => {
  const result = await axios.get(`https://dummyjson.com/products?limit=100`);
  const data = await result.data;
  return data.products;
});

export const productsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: (create) => ({
    productsSort: create.reducer((state, action) => {
      state.products?.sort(function (a, b) {
          if (a[action.payload] > b[action.payload]) {
            return 1;
          }
          if (a[action.payload] < b[action.payload]) {
            return -1;
          }
      });
    }),
  }),
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { productsSort } = productsSlice.actions;

export default productsSlice.reducer;
