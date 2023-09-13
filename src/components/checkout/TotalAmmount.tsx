import React from "react";
import NumberFormat from "react-number-format";

interface basketValue {
	basket: { price: number }[];
}

export default function TotalAmmount({ basket }: basketValue): JSX.Element {
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
				Subtotal ({basket.length} items):{" "}
				<strong>{formatAsCurrency(getBasketTotal(basket))}</strong>
			</p>
			<small className="subtotal__gift">
				<input type="checkbox" /> This order contains a gift
			</small>
		</div>
	);
}
