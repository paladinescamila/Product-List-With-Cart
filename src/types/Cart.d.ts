type Cart = {[key in ProductID]?: number};

type CartList = [ProductID, number][];

type CartQuantities = {
	id: ProductID;
	name: string;
	price: number;
	quantity: number;
	total: number;
}[];
