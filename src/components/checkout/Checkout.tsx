import React from 'react'
import "../checkout/Checkout.css"
import checkOut from '../../img/Checkout-Banner.jpg'
import CheckOutProduct from './CheckOutProduct'
import TotalAmmount from './TotalAmmount'
import { useStateValue } from '../../context/cartContext'
import { product } from '../../model/product'

export default function Checkout() {

  const context = useStateValue();

  const state = context![0]; // Pobieramy pierwszy element z kontekstu
  

  return (
    <div className='checkOut'>
        <div className="checkout__left">
            <img src={checkOut} alt="checkout-banner" className='checkout__ad'/>
            <div>
                <h2 className="checkout__title">
                    Your Cart:
                </h2>
           {state.basket.map((item:product)=>(<CheckOutProduct{...item}></CheckOutProduct>))}
            </div>
        </div>
        <div className="checkout__right">
          <TotalAmmount basket={[]}></TotalAmmount>
        </div>
    </div>
  )
}
