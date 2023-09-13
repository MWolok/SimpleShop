import React from "react";
import "../product/Product.css";

interface props {
    id:number,
    title: string,
    price: number,
    rating:number,
    img:string
}



export default function Product(values:props) {



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

			<button className="product__button">Add to Cart</button>
		</div>
	);
}
