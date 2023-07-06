import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartAr: []
    },
    reducers: {
        setCart: (state, payload) => {
            return {
                cartAr: [...payload.payload]
            }
        },
        byToCart: (state, payload) => {
            const isCart = state.cartAr.find((e) => e.id === payload.payload.id);
            if (!isCart) {
                return {
                    cartAr: [...state.cartAr, { ...payload.payload, qty: 1, total: payload.payload.price }]
                };
            } else {
                const cartNew =  (state.cartAr);
                const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload.id);
                cartNew[objIndex].qty = cartNew[objIndex].qty + 1;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
                return {
                    cartAr: cartNew
                };
            }
        },
        plusToCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload);
            cartNew[objIndex].qty = cartNew[objIndex].qty + 1;
            cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            return {
                cartAr: cartNew
            };
        },
        minusToCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id === payload.payload);
            if (cartNew[objIndex].qty > 1) {
                cartNew[objIndex].qty = cartNew[objIndex].qty - 1;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            }
            return {
                cartAr: cartNew
            };
        },
        qtyCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
            const objIndex = cartNew.findIndex((obj) => obj.id == payload.payload.id);
            if (payload.payload.qty >= 1) {
                cartNew[objIndex].qty = payload.payload.qty;
                cartNew[objIndex].total = cartNew[objIndex].price * cartNew[objIndex].qty;
            }
            return {
                cartAr: cartNew
            };
        },
        DeleteCart: (state, payload) => {
            const cartNew = cloneDeep(state.cartAr);
  
            const index = cartNew.findIndex((obj) => obj.id === payload.payload);

            if (index !== -1) {
                cartNew.splice(index, 1);
            }

            return {
                ...state,
                cartAr: cartNew
            };
        }
    }
});

export const { byToCart, DeleteCart, setCart, plusToCart, minusToCart, qtyCart } = cartSlice.actions;
export default cartSlice.reducer;
