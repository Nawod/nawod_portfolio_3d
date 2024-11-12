"use client";
/**
 * @class store
 * @description this store is to manage state of the web app
 * @author Nawod Madhuvantha
 */

import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
    reducer: {
        loaderStates: loaderSlice.reducer,
    },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;