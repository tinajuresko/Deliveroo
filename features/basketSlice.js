import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newBasket = [...state.items];

            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket!`);
            }

            state.items = newBasket;
        },
    },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = createSelector(
    (state) => state.basket.items,
    (_, id) => id,
    (items, id) => items.filter((item) => item.id === id)
);
export const selectBasketTotal = (state) => state.basket.items.
reduce((total, item) => total += item.price, 0)
export default basketSlice.reducer;