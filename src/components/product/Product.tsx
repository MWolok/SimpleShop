import React from "react";
import "../product/Product.css";
import { useStateValue } from "../../context/cartContext";
import { product } from "../../model/product";



export default function Product(values:product) {
	const context = useStateValue();
	const [state, dispatch] = context || [{ basket: [] }, () => {}];

	const addToCart = (produkt: product) => {
		dispatch({ type: "ADD_TO_BASKET", item: produkt });
	  };

	return (
		<div className="product">
			<div className="product__info">
				<p>{values.title}</p>
				<p className="product__price">{values.price}<small>$</small></p>
				<div className="product__rating">{Array(values.rating).fill(0).map((_,i)=>(<p>⭐</p>))}</div>
			</div>
			<img
				className="product__img"
				src={values.img}
				alt=""
			/>

			<button onClick={()=>addToCart(values)} className="product__button">Add to Cart</button>
		</div>
	);
}
