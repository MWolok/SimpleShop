import React from "react";

import '../checkout/CheckOutProduct.css'
import { useStateValue } from "../../context/cartContext";
import { product } from "../../model/product";


export default function CheckOutProduct(values:product) {
	const context = useStateValue();
	const [state, dispatch] = context || [{ basket: [] }, () => {}];

	const removeFromCart = (produktId: number) => {

		dispatch({ type: "REMOVE_FROM_BASKET", id: produktId });
	  };

	return (
		<div className="checkoutProduct">
			<img src={values.img} alt="" className="checkoutProduct__image" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{values.title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{values.price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(values.rating)
						.fill(0)
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={()=>removeFromCart(values.id)}>Remove</button>
			</div>
		</div>
	);
}
