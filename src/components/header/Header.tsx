import React, { useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../header/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/cartContext";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export default function Header() {
	const context = useStateValue();

	const state = context![0];
	const countItemsInBasket = () => {
		return state.basket.reduce((total, product) => total + 1, 0);
	};

	return (
		<div className="header">
			<div className="header__logo">
				<LocalOfferOutlinedIcon
					className="header_logoImage"
					fontSize="large"></LocalOfferOutlinedIcon>
				<h2 className="header_logoTitle">SimpleShop</h2>
			</div>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchOutlinedIcon className="header__searchIcon"></SearchOutlinedIcon>
			</div>
			<div className="header__nav">
				<Link to="/login" style={{ textDecoration: "none" }}>
					<div className="nav__item">
						<VpnKeyIcon fontSize="small"></VpnKeyIcon>
						<span className="nav__itemLineTwo">SignIn</span>
					</div>
				</Link>

				<div className="nav__item">
					<span className="nav__itemLineOne">Simple</span>
					<span className="nav__itemLineTwo">Shop</span>
				</div>
				<Link to="/checkout" style={{ textDecoration: "none" }}>
					<div className="nav__itemBasket">
						<ShoppingBasketIcon fontSize="large" />
						<span className="nav__itemLineTwo nav__basketCount">
							{countItemsInBasket()}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
