import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from '../assets/assets';
import Title from "../components/Title";
import Productitems from "../components/Productitems";





const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduts, seFilterProducts] = useState([]);
  const [category, setCtegory] = useState([]);
  const [subCategory, setSubCtegory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev)=> prev.filter(item=> item !== e.target.value))
    }
    else {
      setCtegory((prev) => [...prev, e.target.value]);
    }
  }

  

  useEffect(() => {
    seFilterProducts(products);
  }, []);

  useEffect(() => {
    console.log(category);
  },category)


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Filter Options */}

      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2"> FILTER
          <img  className={`h-3 sm:hidden ${showFilter ? 'rotate-90 ' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* CATEGORY fILTER  */}

        <div
          className={`border border-gray-300 pl-5 py-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={toggleCategory} />
              Kids
            </p>
          </div>
        </div>
 
        {/* SUB-CATEGORY fILTER  */}
        <div
          className={`border border-gray-300 pl-5 py-5 mt-6 ${showFilter ? "" : "hidden"} sm:block `}>
          
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwaer"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"winterwear"} />
              Winterwerar
            </p>
          </div>
        </div>
      </div>


      {/* Right Side view  */}
      <div className='flex-1'> 
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Short  */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort bt: Relavent </option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
            {/* Map Product  */}
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
            filterProduts.map((item,index) => (
              <Productitems key={index} name={item.name} id={item._id} price={item.price} image={ item.image} />
                  ))
              }
           </div>
       </div>
    </div>
  );
};

export default Collection;
