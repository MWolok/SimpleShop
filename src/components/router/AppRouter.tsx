import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Checkout from "../checkout/Checkout";

import Login from "../login/Login";


export default function AppRouter() {

  return (
    <>
    <Routes>
    
        <Route path="" element={<><Header></Header><Home></Home></>}></Route>
        <Route path="/checkout" element={<><Header></Header><Checkout></Checkout></>}></Route>
        <Route path="/login" element={<><Header></Header><Login></Login></>}></Route>
        
    </Routes>
   </>
  )
}
