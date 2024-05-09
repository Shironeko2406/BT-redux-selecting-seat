import { configureStore } from "@reduxjs/toolkit";

const infoSeat = [];

export const Store = configureStore({
  reducer: {
    seatReducer: (state = infoSeat, action) => {
      switch (action.type) {
        case "ADD_BOOKING_INFO":
          return {
            ...state,
            infoSeat: [
              ...infoSeat,
              {
                name: action.payload.name,
                numSeats: action.payload.numOfSeats,
              },
            ],
          };
          break;

        default:
          break;
      }

      return state;
    },
  },
});
