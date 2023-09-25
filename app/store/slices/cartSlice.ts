// redux
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
// types
import {
  CartSliceInitialState,
  CartSliceStateItem,
} from "@/types/props.module";

const initialState: CartSliceInitialState = {
  totalAmount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartSliceStateItem>) => {
      const { id, name, count, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += count;
        existingItem.totalAmount = existingItem.count * existingItem.price;
      } else {
        state.items.push({
          id,
          name,
          count,
          price,
          totalAmount: count * price,
          image,
        });
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalAmount,
        0
      );
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (itemIndex !== -1) {
        const removedItem = state.items.splice(itemIndex, 1)[0];
        state.totalAmount -= removedItem.totalAmount;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
