

import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('diaryList') !== null ? JSON.parse(localStorage.getItem('diaryList')) : []
const cartSlice  = createSlice({
    name:'cart',
    initialState:{
        diaryList: items,
        diaryItem: {
            date: "",
            title: "",
            desc: "",
          },
    },
    reducers:{
        // state is initial state and action is data which is cominng in
        addItem(state, action) {
            state.diaryList = [action.payload, ...state.diaryList];

            localStorage.setItem('diaryList',JSON.stringify(state.diaryList.map(item=>item)))
          },
        getEntry(state, action) {
            state.diaryItem = state.diaryList.find((el) => el.id === action.payload);
          },
        updateEntry(state, action) {
            state.diaryList = state.diaryList.map((el) =>
              el.id === action.payload.id ? action.payload : el
            );
          },
        deleteEntry(state, action) {
            state.diaryList = state.diaryList.filter((el) => el.id !== action.payload);
            localStorage.setItem('diaryList',JSON.stringify(state.diaryList.map(item=>item)))
          },


         
       
    }
})
export const {addItem,getEntry,updateEntry,deleteEntry} = cartSlice.actions;
export default cartSlice.reducer;
