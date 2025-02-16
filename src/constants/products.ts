export const PRODUCTS: {[key in ProductID]: Omit<Product, 'id'>} = {
	waffle: {name: 'Waffle with Berries', category: 'Waffle', price: 6.5},
	'creme-brulee': {name: 'Vanilla Bean Crème Brûlée', category: 'Crème Brûlée', price: 7.0},
	macaron: {name: 'Macaron Mix of Five', category: 'Macaron', price: 8.0},
	tiramisu: {name: 'Classic Tiramisu', category: 'Tiramisu', price: 5.5},
	baklava: {name: 'Pistachio Baklava', category: 'Baklava', price: 4.0},
	meringue: {name: 'Lemon Meringue Pie', category: 'Pie', price: 5.0},
	cake: {name: 'Red Velvet Cake', category: 'Cake', price: 4.5},
	brownie: {name: 'Salted Caramel Brownie', category: 'Brownie', price: 4.5},
	'panna-cotta': {name: 'Vanilla Panna Cotta', category: 'Panna Cotta', price: 6.5},
};

export const PRODUCTS_IDS: ProductID[] = Object.keys(PRODUCTS) as ProductID[];
export const PRODUCTS_LIST: Product[] = PRODUCTS_IDS.map((id) => ({...PRODUCTS[id], id}));
