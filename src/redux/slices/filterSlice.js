import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    filter: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const { changeFilter } = filterSlice.actions;