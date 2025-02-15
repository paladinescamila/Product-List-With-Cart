import {PRODUCTS_LIST} from './constants/products';
import './styles/index.scss';

// Components
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

function App() {
	return (
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
	);
}

export default App;
