import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});

export default store;

/*

Create Store
    - configureStore() - RTK
Provide store to my App
    - <Provider store={store} - import from "react-redux"
Create Slices in Store
    - CreateSlice({
        name: "",
        initialState: 
        reducers: {
            addItem: (state,action) => {
                state = action.payload;
            }
        }
    })        
export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;   


- Now we put our slice in store
    {
        reducer: {
             cart: cartSlice,
             user: userSlice,
        }
    }
*/