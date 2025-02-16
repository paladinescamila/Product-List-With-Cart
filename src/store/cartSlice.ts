import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CartState {
	cart: Cart;
	orderConfirmed: boolean;
}

const initialState: CartState = {
	cart: {},
	orderConfirmed: false,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ProductID>) => {
			const productID = action.payload;
			state.cart[productID] = 1;
		},
		removeFromCart: (state, action: PayloadAction<ProductID>) => {
			const productID = action.payload;
			delete state.cart[productID];
		},
		incrementProduct: (state, action: PayloadAction<ProductID>) => {
			const productID = action.payload;
			state.cart[productID] = (state.cart[productID] || 0) + 1;
		},
		decrementProfuct: (state, action: PayloadAction<ProductID>) => {
			const productID = action.payload;
			state.cart[productID] = (state.cart[productID] || 0) - 1;

			if ((state.cart[productID] || 0) < 1) delete state.cart[productID];
		},
		confirmOrder: (state) => {
			state.orderConfirmed = true;
		},
		resetCart: (state) => {
			state.cart = {};
			state.orderConfirmed = false;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementProduct,
	decrementProfuct,
	confirmOrder,
	resetCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
