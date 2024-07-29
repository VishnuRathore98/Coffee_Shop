import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cartManagement',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart: (state, action)=>{
            state.items.push(action.payload.item)
            console.log("Inside redux store: ",action.payload.item);
        },
        removeFromCart: (state, action)=>{
            state.items.splice(state.items.indexOf(action.payload.item.name), 1)
        }
    }
});

export const store = configureStore({
    // In reducer we will manage our app-wide state.
    reducer:{
        cartItems: cartSlice.reducer
    }
});


export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;