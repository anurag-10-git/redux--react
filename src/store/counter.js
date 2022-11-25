import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

{/* an identifier name is must */}
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
    increase(state, action) {
        state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
        state.showCounter = !state.showCounter;
    }
  }});
 {/* reducers is an object ,a Map, of all the reduceers this slice needs  */}


 export const counterActions = counterSlice.actions;
 export default counterSlice.reducer;