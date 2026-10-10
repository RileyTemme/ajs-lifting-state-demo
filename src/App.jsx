
import { useState } from 'react'

import ProductList from './components/ProductList'
import Cart from './components/Cart'
import CartSummary from './components/CartSummary'


const App = () => {

	const [ cart, setCart ] = useState([])

	const onAddToCart = (product) => {
		setCart([...cart, product])
	}

	const onRemoveFromCart = index => {
		setCart(cart.filter((item, i) => i !== index))
	}

	console.log(cart)

	return (
		<div>
			<CartSummary itemCount={cart.length} />
			<ProductList 
				onAddToCart={onAddToCart} 
				onRemove={onRemoveFromCart}
			/>
			<Cart 
				items={cart} 
				onRemove={onRemoveFromCart} 
			/>
		</div>
	)
}

export default App
