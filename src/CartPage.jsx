import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import { RxCrossCircled } from "react-icons/rx";

function CartPage({cart, updateCart}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [localCart, setLocalCart] = useState(cart);
    const productIds = Object.keys(cart);

    useEffect(function () {
        setLocalCart(cart)
    }, [cart]);

    useEffect(function () {
        const myProductPromises = productIds.map(function (id) {
            return getProductData(id);
        });  //only promises store here

        Promise.all(myProductPromises).then(function (product) {
            setProducts(product);
            setLoading(false);
            console.log("apiproduct mil gya ", products)
        });   //when all promises are come, then store them

    }, [cart]);

    function handleRemove(id) {

        const newCart = {...cart};
        console.log("before cart", cart);

        delete newCart[id];

        updateCart(newCart);
        setLoading(true);
    }

    function handleChange(event, id) {
       const newValue = event;
       const productId = id;

       const newLocalcart = {...localCart , [productId] : newValue};
       setLocalCart(newLocalcart);
    }

    function updateNewCart(){
        updateCart(localCart);
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <div >
            {products.map(function (p) {
                return (
                    <div keys={p.id}>
                        {p.title}{" "}
                        <input
                        key = {p.id}
                          productid = {p.id}
                          type="number"
                          className="w-12 p-1 mx-2 border border-gray-300 rounded-md"
                          value={localCart[p.id]}
                          onChange={ function (event) {
                            handleChange(+event.target.value, p.id)
                          }}
                        />

                        <button productid={p.id} onClick={ function (event) {
                            handleRemove(p.id);
                        }} >
                           <RxCrossCircled />
                        </button>

                    </div>
                )
            })}
            <button onClick={updateNewCart}
            className="bg-primary-default px-2 rounded-md">
               updateCart
            </button>


        </div>

    )

}

export default CartPage;