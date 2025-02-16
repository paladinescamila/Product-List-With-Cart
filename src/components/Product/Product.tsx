import {useMemo} from 'react';
import {useCartStore} from '../../store/useCartStore';
import {getImage} from '../../utils/getImage';
import './Product.scss';

// Assets
import AddToCartIcon from '../../assets/add-to-cart.svg';

interface ProductProps {
	product: Product;
}

export default function Product({product}: ProductProps) {
	const {cart, addToCart, incrementProduct, decrementProduct} = useCartStore();
	const image = useMemo(() => getImage(product.id), [product.id]);

	return (
		<li className={`product${cart[product.id] ? '--selected' : ''}`}>
			<div className='image-and-add-to-cart'>
				<img src={image} alt={product.name} className='product__image' />
				{cart[product.id] ? (
					<div className='handle-quantity'>
						<button
							className='handle-quantity__decrement'
							onClick={() => decrementProduct(product.id)}
						/>
						<p>{cart[product.id]}</p>
						<button
							className='handle-quantity__increment'
							onClick={() => incrementProduct(product.id)}
						/>
					</div>
				) : (
					<button className='add-to-cart' onClick={() => addToCart(product.id)}>
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
		</li>
	);
}
