import React from "react";
import "../home/Home.css";
import banner from "../../img/Shop.jpg";
import Product from "../product/Product";

export default function Home() {
	return (
		<div className="home">
			<div className="home__conateiner">
				<img src={banner} className="home__image" alt="shop-banner" />
				<div className="home__row">
					<Product title="SONY KD-65X85K TV" id={1} price={1999.99} rating={2} img={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9UX25Ck9r171Nv9eiPEXHzvQmNUqJ_E__ax6W5HKtZ_gBBWQsqDfuRa3Z19_9oQ-_rxrfpM9m70bo61jD4uksr8NUcP73ltdm0ZjzH-A&usqp=CAE"}></Product>
					<Product title="Xiaomi Redmi 12 4/128GB smartphone - 6.79 - 50 Mpix - blue" id={2} price={129.99} rating={4} img={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1mIlA_nOB21tGovA8ZB79W5mQqAjIPzKEdLpri-ovex_ggQn98d02QKERpUpuSBUvRnhgiwXVCdvr4cIqKiNKB_8t8i2q0fNI4EGI_3VXeeSdckTXraJT&usqp=CAE"}></Product>
				</div>

				<div className="home__row">
					<Product title="MSI GeForce RTX 3060 Gaming Z Trio 12GB LHR graphics card" id={3} price={329.75} rating={4} img={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6HUErIAOlu_DHw0ib6MdUlaZt-uRatFh37uA3V45Iwoj_ZiBBV2UyFjetaDkRm4RmzEgxc7WWuxOgtq9P6p0LUzp8-8MncUckGxhzRAxcEjU9iF1LpzPAAg&usqp=CAE"}></Product>
					<Product title="MIBRO Lite Smartwatch Black" id={4} price={88} rating={4} img={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRiRBzWUYtHeFF_-ayBE3miLp8mSm9ii6MhjXVbV1592ABB0Pici5MCWhppg_SNVwvtv6o_uM7t_Iqq_tXt_PSoWqUUrKDPErMEnlF1ODD8uoPHjTCRR0Nb&usqp=CAE"}></Product>
				</div>
				<div className="home__row">
					<Product title="Roborock S8 Cleaning Robot Black" id={5} price={500.99} rating={3} img={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7xcjQfUMNAjuX4XWFUsb2wiDDAeY5wGVOXFN01Lbg5bbOv8TZstNjglQk21NTZZ348kcp3x-jAs2WA_rXBFHCAFOOthFOrln5UhP3oUanCWkQHdH0tMHsZw0&usqp=CAE"}></Product>
					<Product title="De Longhi ECAM450.55.G Eletta espresso machine" id={6} price={599} rating={5} img={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDDQq-l5CfDaupzv5Herd6vE_RA1tnqCkIRNqHy1xl74hSjB3aHxFrzvnA2zkRSUu8HInysjvgdgTudNOeBQBIs9EgqsKxBbxJqSo0wcEmmWW0jAFsjG1y&usqp=CAE"}></Product>
				</div>
			</div>
		</div>
	);
}
