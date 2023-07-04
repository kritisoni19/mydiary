import { createSlice } from "@reduxjs/toolkit";

const uiSliceData = createSlice({
    name:'ui',
    initialState:{
        homePage:true,
        entryform:false,
        myentries:false,
        editMode:false
    },
    reducers:{
        showEntries(state) {
            state.homePage = false;
            state.entryform = false;
            state.myentries = true;
            state.editMode = false;
          },
          showForm(state) {
            state.homePage = false;
            state.entryform = true;
            state.myentries = false;
            state.editMode = false;
          },
          showEditForm(state) {
            state.homePage = false;
            state.entryform = false;
            state.myentries = false;
            state.editMode = true;
          },
    }
})

export const {showEntries,showForm,showEditForm} = uiSliceData.actions;
export default uiSliceData;