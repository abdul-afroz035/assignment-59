import React from 'react';
import Product from './Product'

function Productlist({ Products }) {
    return (
        <div className="md:grid grid-cols-3 gap-2 ">
            {Products.map(function (item) { 
                return <Product key={item.title} {...item} /> //..item=> item ke andar jitne v comp hai sabko use kro
            })} 
        </div>
    );
}


export default Productlist;