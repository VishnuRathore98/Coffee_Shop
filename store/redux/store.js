import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cartManagement',
    initialState:{
        items:[]
    },
    reducers:{
        addToCart: (state, action)=>{
            state.items.push(action.payload.item)
            // console.log("Inside redux store: ",action.payload.item);
        },
        removeFromCart: (state, action)=>{
            state.items.forEach((item,index)=>item.id===action.payload.id?state.items.splice(index,1):"not found");
            // console.log(state.items.indexOf(action.payload.id));
            // state.items.splice(state.items.indexOf(action.payload.item.id), 1)
        },
        emptyCart:(state)=>{
            state.items=[]
        }
    }
});

const receiptSlice = createSlice({
    name:'receiptManagement',
    initialState:{
        items:[]
    },
    reducers:{
        addToReceipt: (state, action)=>{
            console.log(" receipt inside store ==> ",action.payload.item);
            state.items.push(action.payload.item);
        }
    }
});

export const store = configureStore({
    // In reducer we will manage our app-wide state.
    reducer:{
        cartItems: cartSlice.reducer,
        receiptItems: receiptSlice.reducer
    }
});


export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const emptyCart = cartSlice.actions.emptyCart;

export const addToReceipt = receiptSlice.actions.addToReceipt;