import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage engine

// Create a config object for redux-persist
const persistConfig = {
  key: "root", // Unique key for your persisted reducer
  storage, // Use local storage as the storage engine
};

// Create a persisted reducer using persistReducer
const persistedCartReducer = persistReducer(
  persistConfig,
  cartReducer
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Use the persisted reducer for your cart
    // Add other reducers as needed
  },
});
// Create the persistor using persistStore
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
