import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
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
        }
    }
})

export const { increment, decrement, incrementbyAmount ,decrementbyAmount} = counterSlice.actions
export const counterReducer=counterSlice.reducer
export default counterSlice.reducers;