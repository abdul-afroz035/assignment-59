import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Productlistpage from './Productlistpage'
import Productdetails from './Productdetails'
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ForgotPassPage from "./ForgotPassPage";

function App() {
  const saveCartItem = localStorage.getItem("my-Cart") || "{}";
  const savedCart = JSON.parse(saveCartItem);

  const [cart, setCart] = useState(savedCart)  //empty object dia initialy

    function HandleAddToCart(productId, Count){   //balti pas krege prdctDet Tag se
      const oldCount = cart[productId] || 0;  //agar cart ke andr current prId hoga to uska count store krega 
      
      const newCart = {...cart, [productId] : oldCount + Count}
      setCart(newCart); //obj me prdctId ke value ke agnst value store kr rhe [] ki use se
      const cartString = JSON.stringify(newCart);
      localStorage.setItem("my-Cart", cartString);
    }

    const totalCount = +Object.keys(cart).reduce(function (previous, current) {
      return +previous + cart[current];
    }, 0);   // pre me initital o rhega and curr me obj.key1... ayega and then return me cart[cur] se key ka value milega
    //  or add ho jyega or pre me jata rhega or jab sab obj trace ho jyega then totcount me final additin ayga

    const path = window.location.pathname;
    return (
        <div className=" bg-gray-light h-screen overflow-scroll flex flex-col">
            <Navbar productCount={totalCount} />
            <div className="grow px-4">
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path="/SignupPage" element={<SignupPage />} />
                    <Route path="/ForgotPassPage" element={<ForgotPassPage />} />
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
