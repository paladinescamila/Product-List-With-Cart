type Product = {
	id: ProductID;
	name: string;
	category: string;
	price: number;
};

type ProductID =
	| 'waffle'
	| 'creme-brulee'
	| 'macaron'
	| 'tiramisu'
	| 'baklava'
	| 'meringue'
	| 'cake'
	| 'brownie'
	| 'panna-cotta';
