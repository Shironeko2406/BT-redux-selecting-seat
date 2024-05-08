import { configureStore } from "@reduxjs/toolkit";


const infoSeat = []

export const Store = configureStore({
    reducer: {
        seatReducer: (state = infoSeat, action)=>{
            return state
        }
    }
})