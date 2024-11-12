"use client";
/**
 * @class loaderSlice
 * @description purpose of this slice is to manage page loading states
 * @author Nawod Madhuvantha
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoad : false
};

const loaderSlice = createSlice({
    name: "loader",
    initialState: initialState,
    reducers: {
        //change loading state
        changeLoadingState(state) {
            state.isLoad = true;
        },
    }
    });

    export const loaderAction = loaderSlice.actions;
    
    export default loaderSlice;
