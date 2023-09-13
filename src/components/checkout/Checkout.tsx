import React from 'react'
import "../checkout/Checkout.css"
import checkOut from '../../img/Checkout-Banner.jpg'
import CheckOutProduct from './CheckOutProduct'
import TotalAmmount from './TotalAmmount'

export default function Checkout() {
  return (
    <div className='checkOut'>
        <div className="checkout__left">
            <img src={checkOut} alt="checkout-banner" />
            <div>
                <h2 className="checkout__title">
                    Your Cart:
                </h2>
                <CheckOutProduct title="Roborock S8 Cleaning Robot Black" id={5} price={500.99} rating={3} img={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7xcjQfUMNAjuX4XWFUsb2wiDDAeY5wGVOXFN01Lbg5bbOv8TZstNjglQk21NTZZ348kcp3x-jAs2WA_rXBFHCAFOOthFOrln5UhP3oUanCWkQHdH0tMHsZw0&usqp=CAE"}></CheckOutProduct>
                <CheckOutProduct title="Roborock S8 Cleaning Robot Black" id={5} price={500.99} rating={3} img={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7xcjQfUMNAjuX4XWFUsb2wiDDAeY5wGVOXFN01Lbg5bbOv8TZstNjglQk21NTZZ348kcp3x-jAs2WA_rXBFHCAFOOthFOrln5UhP3oUanCWkQHdH0tMHsZw0&usqp=CAE"}></CheckOutProduct>
            </div>
        </div>
        <div className="checkout__right">
          <TotalAmmount basket={[]}></TotalAmmount>
        </div>
    </div>
  )
}
