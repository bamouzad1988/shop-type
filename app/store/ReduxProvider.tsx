"use client";
import React from "react";
// redux
import { Provider } from "react-redux";
import { store } from "./store";
// persist
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
