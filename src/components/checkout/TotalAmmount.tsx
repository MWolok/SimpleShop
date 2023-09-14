import React from "react";
import NumberFormat from "react-number-format";
import "../checkout/TotalAmmount.css";
import { useStateValue } from "../../context/cartContext";

interface basketValue {
	basket: { price: number }[];
}

export default function TotalAmmount({ basket }: basketValue): JSX.Element {

	const context = useStateValue();

	const state = context![0];
	const countItemsInBasket = () => {
		return state.basket.reduce((total, product) => total + 1, 0);
	  };



	const getBasketTotal = (basket: { price: number }[]) => {
		return basket.reduce((total, item) => total + item.price, 0);
	};

	const formatAsCurrency = (value: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
		}).format(value);
	};

	return (
		<div className="ammount">
			<p>
				Subtotal ({state.basket.length} items):{" "}
				<strong>{formatAsCurrency(getBasketTotal(state.basket))}</strong>
			</p>
			<small className="subtotal__gift">
				<input type="checkbox" /> This order contains a gift
			</small>
			<button>CheckOut</button>
		</div>
	);
}
