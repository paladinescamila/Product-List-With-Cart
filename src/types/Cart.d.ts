type Cart = {[key in ProductID]?: number};

type CartList = [ProductID, number][];

type CalculatedCartItem = {
	id: ProductID;
	name: string;
	price: number;
	quantity: number;
	total: number;
};

type CalculatedCart = CalculatedCartItem[];
