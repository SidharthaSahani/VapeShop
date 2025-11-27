import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitems from './Productitems';
// import { log } from 'node:console'; 



const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [realted, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subCategory === item.subCategory);

           setRelated(productCopy.slice(0, 5));

        }
    },[products])


  return (
      <div className='my-24'>
          <div className='text-center text-3xl py-2'>
              <Title text1={'RELATED'} text2={'PRODUCTS'} />
          </div>

          <div className='grid gris-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {realted.map((item, index) => (
                  <Productitems key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
              ))}
          </div>
      
    </div>
  )
}

export default RelatedProduct
