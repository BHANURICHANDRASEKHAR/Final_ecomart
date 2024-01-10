import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../Redux-store/Centralstore/cart-slice';
import { useSelector } from 'react-redux';
import { getcookie } from '../../../fetchfunction';
import axios from 'axios';
function useFunction() {
  const dispatch = useDispatch();
const cartdata=useSelector(state=>state.cartslice);

  function addItems(data) {
    const [id,productname,price,productimg]=data;
    const data1=[{
        productimg:productimg,
        id:id,
        price:price,
        productname:productname,
        
    }]
    console.log(data1)
    const token=getcookie();
    if(token)
    {
      axios.post('http://localhost:5000/addtocart',data1,{
        headers: { 'x-token': token }
      })

      .then((res)=>{
        if(res.data.status=='Success')
        {  
          dispatch(cartActions.addtocart(res.data.data))

        }
      })
   .catch((e)=>{
    console.log(e.message)
   })
    }
    else{
      navigate('/login')
    }
  }
  
  function removeItems(data) {
   const data1={
    id:data
   }
   dispatch(cartActions.removecart(data1));

  }
  function removeentireItem(id)
  {
  dispatch(cartActions.deleteentireitem(id))
  }

  return [addItems, removeItems,cartdata,removeentireItem];
}

export default useFunction;


// const addToCart = (event,id, productname, price, productimg) => {
//   event.preventDefault();
//     const values = [
//       {

//         id: id,
//         productname: productname,
//         price: price,
//         productimg: productimg,
      
//       },

//     ];
//     const token=getcookie();
//     if(token)
//     {
//       axios.post('http://localhost:5000/addtocart',values,{
//         headers: { 'x-token': token }
//       })

//       .then((res)=>{
//         if(res.data.status=='Success')
//         {  
//           dispatch(cartActions.addtocart(res.data.data))

//         }
//       })
//    .catch((e)=>{
//     console.log(e.message)
//    })
//     }
//     else{
//       navigate('/login')
//     }
   
//   }