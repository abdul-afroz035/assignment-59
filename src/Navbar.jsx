import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";


function Navbar({productCount}) {
  return (
    <div class=" bg-white py-3 px-16  w-full">
      <div class="flex justify-between items-center max-w-6xl mx-auto">
        <img class="h-16 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Amazon_2024.svg" alt="amazon-logo"/>
        <div className="flex flex-col items-center"> 
          <HiOutlineShoppingBag class="text-5xl text-primary-default"/>
          <span className="-m-7 text-primary-default">{productCount}</span>
        </div>
      </div>
     
      
    </div>
  );
}

export default Navbar;