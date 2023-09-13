import React from "react";

import '../checkout/CheckOutProduct.css'
interface props {
    id:number,
    title: string,
    price: number,
    rating:number,
    img:string
}

export default function CheckOutProduct(values:props) {
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
				<button onClick={()=>{}}>Remove from Basket</button>
			</div>
		</div>
	);
}
