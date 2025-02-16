import {PRODUCTS_LIST} from './constants/products';
import {useCartStore} from './store/useCartStore';
import './styles/index.scss';

// Components
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';

function App() {
	const {orderConfirmed} = useCartStore();

	return (
		<>
			<main className='container'>
				<section className='title-and-products'>
					<h1 className='title'>Desserts</h1>
					<ul className='products'>
						{PRODUCTS_LIST.map((product) => (
							<Product key={`product-${product.id}`} product={product} />
						))}
					</ul>
				</section>
				<Cart />
			</main>
			{orderConfirmed && <Order />}
		</>
	);
}

export default App;
