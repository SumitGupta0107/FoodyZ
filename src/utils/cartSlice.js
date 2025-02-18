import { createSlice } from "@reduxjs/toolkit";
// we will modify our cart slice usiong reducer functions
    //what action will call what reducer function
    // action : reducer function
    //reducerFunction : takes 2 things state and action
    //state is initial state and action IS what we want to put in our slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        price: 0,
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
            if(action.payload?.price)
            state.price = state.price + (action.payload.price/100);
        },
        removeItem: (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            if(action.payload?.price)
            state.price = state.price - (action.payload?.price/100);
        },
        clearCart : (state) => {
            state.items = [];
            state.price = 0;
        },
    },
});

// cart slice is a big object
// so this object has :
/*
    action:{ addItem, removeItem, clearCart},
    reducer: reducers(some reducers)
 */


//we need to export the actions as well
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//it will combine all reducers together and export them
export default cartSlice.reducer;