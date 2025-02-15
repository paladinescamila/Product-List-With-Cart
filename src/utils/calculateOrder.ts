import {PRODUCTS} from '../constants/products';

export const calculateOrder = (cartList: CartList) => {
	const quantities: CartQuantities = [];
	let totalOfItems: number = 0;
	let totalToPay: number = 0;

	for (const [id, quantity] of cartList) {
		const productID = id as ProductID;
		const {name, price} = PRODUCTS[productID];
		quantities.push({id: productID, name, price, quantity, total: price * quantity});
		totalOfItems += quantity;
		totalToPay += price * quantity;
	}

	return {quantities, totalOfItems, totalToPay};
};
