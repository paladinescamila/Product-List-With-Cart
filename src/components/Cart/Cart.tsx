import {useMemo} from 'react';
import {CART_LIST_SAMPLE} from '../../constants/products';
import {calculateOrder} from '../../utils/calculateOrder';
import './Cart.scss';

// Assets
import EmptyCartImage from '../../assets/empty-cart.svg';
import CarbonNeutralIcon from '../../assets/carbon-neutral.svg';

export default function Cart() {
	const {quantities, totalOfItems, totalToPay} = useMemo(
		() => calculateOrder(CART_LIST_SAMPLE),
		[]
	);

	return (
		<article className='cart'>
			<h2 className='cart__title'>Your Cart ({totalOfItems})</h2>
			{totalOfItems ? (
				<>
					<ul className='cart__items'>
						{quantities.map(({id, name, price, quantity, total}) => (
							<li key={`cart-${id}`} className='cart-item'>
								<p className='cart-item__name'>{name}</p>
								<p className='quantity-price-total'>
									<span className='cart-item__quantity'>{quantity}x</span>
									<span className='cart-item__price'>@ ${price.toFixed(2)}</span>
									<span className='cart-item__total'>${total.toFixed(2)}</span>
								</p>
								<button className='cart-item__remove' />
							</li>
						))}
					</ul>
					<div className='cart__total'>
						<p>Order Total</p>
						<p>${totalToPay.toFixed(2)}</p>
					</div>
					<div className='cart__carbon-neutral'>
						<img src={CarbonNeutralIcon} alt='Carbon neutral' />
						<p>
							This is a <span>carbon-neutral</span> delivery
						</p>
					</div>
					<button className='button'>Confirm Order</button>
				</>
			) : (
				<>
					<img src={EmptyCartImage} alt='Empty cart' className='cart__image' />
					<p className='cart__description'>Your added items will appear here</p>
				</>
			)}
		</article>
	);
}
