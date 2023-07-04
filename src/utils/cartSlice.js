import { createSlice } from "@reduxjs/toolkit";



const cartSlice  = createSlice({
    name:'cart',
    initialState:{
        diaryList: [],
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
          },
       
    }
})
export const {addItem,getEntry,updateEntry,deleteEntry} = cartSlice.actions;
export default cartSlice.reducer;