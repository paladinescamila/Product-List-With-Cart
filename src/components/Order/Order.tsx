import {useMemo} from 'react';
import {useCartStore} from '../../store/useCartStore';
import {calculateOrder} from '../../utils/calculateOrder';
import {getImage} from '../../utils/getImage';
import './Order.scss';

// Assets
import OrderConfirmedIcon from '../../assets/order-confirmed.svg';

export default function Order() {
	const {cart, resetCart} = useCartStore();
	const {calculatedCart, totalToPay} = useMemo(() => calculateOrder(cart), [cart]);

	return (
		<div className='background'>
			<div className='order'>
				<img className='order__check' src={OrderConfirmedIcon} alt='Order confirmed' />
				<h2 className='order__title'>Order Confirmed</h2>
				<p className='order__subtitle'>We hope you enjoy your food!</p>
				<div className='order__summary'>
					<ul className='order__products'>
						{calculatedCart.map(({id, name, price, quantity, total}) => (
							<li key={`order-${id}`} className='order-item'>
								<img
									src={getImage(id, true)}
									alt={name}
									className='order-item__image'
								/>
								<p className='order-item__name'>{name}</p>
								<p className='order-item__quantity-price'>
									<p className='order-item__quantity'>{quantity}x</p>
									<p className='order-item__price'>@ ${price.toFixed(2)}</p>
								</p>
								<p className='order-item__total'>${total.toFixed(2)}</p>
							</li>
						))}
					</ul>
					<div className='order__total'>
						<p>Order Total</p>
						<p>${totalToPay.toFixed(2)}</p>
					</div>
				</div>
				<button className='button' onClick={resetCart}>
					Start New Order
				</button>
			</div>
		</div>
	);
}
