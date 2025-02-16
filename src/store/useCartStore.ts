import {useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';

import {
	addToCart,
	removeFromCart,
	incrementProduct,
	decrementProduct,
	confirmOrder,
	resetCart,
} from './cartSlice';

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export const useCartStore = () => {
	const {cart, orderConfirmed} = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return {
		cart,
		orderConfirmed,
		addToCart: (productID: ProductID) => dispatch(addToCart(productID)),
		removeFromCart: (productID: ProductID) => dispatch(removeFromCart(productID)),
		incrementProduct: (productID: ProductID) => dispatch(incrementProduct(productID)),
		decrementProduct: (productID: ProductID) => dispatch(decrementProduct(productID)),
		confirmOrder: () => dispatch(confirmOrder()),
		resetCart: () => dispatch(resetCart()),
	};
};
