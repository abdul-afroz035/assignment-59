import React, { useEffect, useState } from 'react';
import Productlist from './Productlist';
import { getProductsList } from './api';
import NoMatching from './NoMatching';
import Loading from './Loading';


function Productlistpage() {
  const [ProductsList, setProductsList] = useState([]);
  const [LoadingData, setLoading] = useState(true)


  useEffect(function () {
    const xyz = getProductsList();  //token store from axios
    xyz.then(function (products) {
      setProductsList(products)
      setLoading(false)
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");


  let data = ProductsList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1
  })

  // return -ve if x should come first and viseversa
  if (sort == "title") {
    data.sort(function (x, y) {
      return (x.title < y.title) ? -1 : 1;
    });
  }
  else if (sort == "price-low") {
    data.sort(function (x, y) {
      return x.price - y.price
    });
  }
  else if (sort == "price-high") {
    data.sort(function (x, y) {
      return y.price - x.price
    });
  }



  function handleSearchChange(event) {
    const newquery = event.target.value;
    setQuery(newquery);
  }

  function handleSort(event) {
    const newsort = event.target.value;
    setSort(newsort);
  }
  // now start Return values

  if (LoadingData) {
    return <Loading />
  }
  

  return (
    <div>

      <div className=" bg-white max-w-6xl mx-auto my-16 py-6 px-6">
        <div class="flex justify-end my-4">
          <input value={query}
            class="border border-gray-400 px-2 mr-2 rounded-sm"
            placeholder="search"
            onChange={handleSearchChange} />

          <select
            value={sort}
            onChange={handleSort}
            class="text-xs bg-gray-200 px-2 py-1">
            <option value="default">default sorting</option>
            <option value="title">Sort by title</option>
            <option value="price-low">Sort by price : low-high</option>
            <option value="price-high">Sort by price : high-low</option>

          </select>
        </div>


        {data.length > 0 && <Productlist Products={data} />}
        {data.length == 0 && <NoMatching />}

        <button class="text-[10px] text-white bg-primary-default border-2 border-primarbg-primary-default py-1 px-2 mt-8 mr-1"> 1 </button>
        <button class="text-[10px] text-primary-default bg-white border-2 border-primary-default py-1 px-2 mt-8 mr-1"> 2 </button>
        <button class="text-[10px] text-primary-default bg-white border-2 border-primary-default py-1 px-1 mt-8 mr-1"> --- </button>
      </div>
    </div>

  );
}

export default Productlistpage;