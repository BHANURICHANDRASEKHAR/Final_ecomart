import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Empty from './Empty';
import Cart1 from './Cart1';
import './cart.css'
export default function Cart() {
  const [count, setCount] = useState(0); // Provide an initial value
  const [emptyCart, setEmptyCart] = useState(false); // Provide an initial value
  const count1 = useSelector((state) => state.cartslice.totalquntity || 0); // Adjust the selector based on your store structure
  const data = useSelector((state) => state.cartslice.itemslist); // Adjust the selector based on your store structure

  useEffect(() => {
    fetchDataFromStore();
  }, [count, fetchDataFromStore]);

  function fetchDataFromStore() {
    setCount(count1);
    setEmptyCart(count1 <= 0);
  }

  return (

    <div className='container '>
    {emptyCart ? <Empty /> 
    : 
   <div className='row w-100 mt-5'> <Cart1 item={data}/></div>
   
  }
    </div>
  );
}
