import {PRODUCTS} from '../constants/products';

export const calculateOrder = (cart: Cart) => {
	const cartList: CartList = Object.entries(cart) as CartList;

	const quantities: CartQuantities = [];
	let totalOfItems: number = 0;
	let totalToPay: number = 0;

	for (const [id, quantity] of cartList) {
		const {name, price} = PRODUCTS[id];
		quantities.push({id, name, price, quantity, total: price * quantity});
		totalOfItems += quantity;
		totalToPay += price * quantity;
	}

	return {quantities, totalOfItems, totalToPay};
};
