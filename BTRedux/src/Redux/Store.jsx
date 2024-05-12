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
                selectedSeats: {},
              },
            ],
          };
            

          case "CONFIRM_INFO":
            const { selectedSeats } = action.payload;
  
            // // Update the latest booking information with selected seats
            // return {
            //   ...state,
            //   infoSeat: state.infoSeat.map((bookingInfo, index) => {
            //     if (index === state.infoSeat.length - 1) { // Update only the last entry
            //       return {
            //         ...bookingInfo,
            //         selectedSeats,
            //       };
            //     }
            //     return bookingInfo;
            //   }),
            // };
            const updatedInfoSeat = state.infoSeat.map((bookingInfo, index) => {
              if (index === state.infoSeat.length - 1) {
                // Update only the last entry
                return {
                  ...bookingInfo,
                  selectedSeats: selectedSeats.reduce((acc, seat) => {
                    acc[seat] = true; // Set seat number as key with value true (selected)
                    return acc;
                  }, {}),
                };
              }
              return bookingInfo;
            });
            
            
            return {
              ...state,
              infoSeat: updatedInfoSeat,
            };

        default:
          break;
      }

      return state;
    },
  },
});
