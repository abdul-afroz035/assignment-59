import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Productlistpage from './Productlistpage'
import Productdetails from './Productdetails'
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  const [cart,setCart] = useState({})  //empty object dia initialy

    function HandleAddToCart(productId, Count){   //balti pas krege prdctDet Tag se
      const oldCount = cart[productId] || 0;  //agar cart ke andr current prId hoga to uska count store krega 

      setCart({...cart, [productId] : oldCount + Count}); //obj me prdctId ke value ke agnst value store kr rhe [] ki use se
      
    }

    const totalCount = +Object.keys(cart).reduce(function (previous, current) {
      return +previous + cart[current];
    }, 0);

    const path = window.location.pathname;
    return (
        <div className=" bg-gray-light h-screen overflow-scroll flex flex-col">
            <Navbar productCount={totalCount} />
            <div className="grow px-4">
                <Routes>
                    <Route index element={<Productlistpage />} />
                    <Route path="/Products/:id" element={<Productdetails onAddToCart={HandleAddToCart} />} />
                    <Route path="/Productlistpage" element={<Productlistpage />} />
                    <Route path="*" element={<NotFound/>} /> 
                </Routes>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
    // path="*" means -> when no routes matches then this route run

}

export default App;
