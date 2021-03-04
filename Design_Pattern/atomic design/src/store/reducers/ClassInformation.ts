import { createSlice } from "@reduxjs/toolkit";
import { ClassInfoType } from "../types";

const initialState: ClassInfoType = {
    isLoading: false,
    isSuccess: false,
    isFail: false,
    Category: [],
    title: "",
    classSimpleInfo: {
        chapter: 0,
        videoNumber: 0,
        startDate: "",
        Caption: false,
    },
    monthlyInstallments: 0,
    monthlyPayment: 0,
    discountAmount: 0,
    goodAmount: 0,
};

const ClassInfoStore = createSlice({
    name: "ClassInfoStore",
    initialState,
    reducers: {
        RequestClassInfoData: (state) => {
            state.isLoading = true;
        },

        RequestClassInfoSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.Category = payload.Category;
            state.title = payload.title;
            state.classSimpleInfo = payload.classSimpleInfo;
            state.monthlyInstallments = payload.monthlyInstallments;
            state.monthlyPayment = payload.monthlyPayment;
            state.discountAmount = payload.discountAmount;
            state.goodAmount = payload.goodAmount;
        },
        RequestClassInfoFail: (state) => {
            state.isLoading = false;
            state.isFail = true;
        },
    },
});

export const {
    RequestClassInfoData,
    RequestClassInfoSuccess,
    RequestClassInfoFail,
} = ClassInfoStore.actions;

export default ClassInfoStore.reducer;
