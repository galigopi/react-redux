import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        studentData: []
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementbyAmount: (state, action) => {
            state.value += Number(action.payload)
        },
        decrementbyAmount: (state, action) => {
            state.value -= Number(action.payload)
        },
        fetchtodos: (state, action) => {
            state.studentData = action.payload
        },
        resetStore:(state)=>{
            state.value=0;
            state.studentData=[]
        }

    }
})

export const {
    increment,
    decrement,
    incrementbyAmount,
    decrementbyAmount,
    fetchtodos,
    resetStore
} = counterSlice.actions
export const counterReducer = counterSlice.reducer
export default counterSlice.reducers;