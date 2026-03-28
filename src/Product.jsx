import React from 'react';
import { Link } from "react-router";

function Product({ thumbnail, category, title, price, id }) { //destructuring
  return (
    <div >

      <div class=" max-h-80 aspect-square">
        <img class=" bg-gray-light w-full h-full object-cover"
          src={thumbnail} />
      </div>

      <div class="text-gray-400 text-xs font-bold"> {category}
      </div>

      <div class="text-gray-700 text-md font-bold">{title}
      </div>

      <div class="bg-white flex ">
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
      </div>

      <div class="text-gray-700 text-sm font-bold"> Rs.{price}</div>

      <Link className="text-gray-700 text-sm font-extrabold inline-block" to={"/Products/" + id} >
        <img className='h-15 object-cover' src="https://cdn.vectorstock.com/i/500p/20/67/modern-speech-bubble-more-info-vector-41712067.jpg"/>
      </Link>
    </div>
  );
}

export default Product;