import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: null,
};

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const result = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = await result.data;
  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
