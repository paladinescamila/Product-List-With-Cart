import {useMemo} from 'react';
import {CART_SAMPLE} from '../../constants/products';
import {getImage} from '../../utils/getImage';
import './Product.scss';

// Assets
import AddToCartIcon from '../../assets/add-to-cart.svg';

interface ProductProps {
	product: Product;
}

export default function Product({product}: ProductProps) {
	const image = useMemo(() => getImage(product.id, 'desktop'), [product.id]);

	return (
		<ul className={`product${CART_SAMPLE[product.id] ? '--selected' : ''}`}>
			<div className='image-and-add-to-cart'>
				<img src={image} alt={product.name} className='product__image' />
				{CART_SAMPLE[product.id] ? (
					<div className='handle-quantity'>
						<button className='handle-quantity__decrement' />
						<p>{CART_SAMPLE[product.id]}</p>
						<button className='handle-quantity__increment' />
					</div>
				) : (
					<button className='add-to-cart'>
						<img src={AddToCartIcon} alt='Add to cart' />
						<p>Add to Cart</p>
					</button>
				)}
			</div>
			<div className='product-data'>
				<p className='product__category'>{product.category}</p>
				<p className='product__name'>{product.name}</p>
				<p className='product__price'>${product.price.toFixed(2)}</p>
			</div>
		</ul>
	);
}
