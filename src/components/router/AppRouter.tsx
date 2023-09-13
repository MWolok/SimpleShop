import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Checkout from "../checkout/Checkout";


export default function AppRouter() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<><Header></Header><Home></Home></>}></Route>
        <Route path="/checkout" element={<><Header></Header><Checkout></Checkout></>}></Route>
    </Routes>
   </>
  )
}
